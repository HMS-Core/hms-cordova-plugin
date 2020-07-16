/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

const argscheck = require('cordova/argscheck');
const cordova = require('cordova');
const exec = require('cordova/exec');

// /////////////////////////////////////////////////////////
// JS UTILITIES
// /////////////////////////////////////////////////////////

const mkFnName = (prefix, fnName) =>
    `${prefix}${fnName.charAt(0).toUpperCase()}${fnName.slice(1)}`;

const isFunction = obj => !!(obj && obj.constructor && obj.call && obj.apply);
const isString = it => typeof it === 'string' || it instanceof String;
const isBoolean = val => 'boolean' === typeof val;
const isObject = obj => true // TODO: isObject
const isNumeric = num => !isNaN(num);
const isInt = num => Number.isInteger(num);
const isArray = arr => Array.isArray(arr);

// /////////////////////////////////////////////////////////
// GENERAL UTILS
// /////////////////////////////////////////////////////////

const ArrayType = function (elemType) {
    this.elemType = elemType;
};

const arrayOf = (elemType) => new ArrayType(elemType);

const isArrayType = (x) => x.constructor === ArrayType

const checkerList = {
    'string': isString,
    'function': isFunction,
    'boolean': isBoolean,
    'number': isNumeric,
    'float': isNumeric,
    'double': isNumeric,
    'integer': isInt,
    'array': isArray,
    'object': isObject
};

const isTypeOf = (arg, type) => {
    const checker = checkerList[type];
    return checker ? checker(arg) : false;
};

const typeCheck = (args, checker) => {
    if (isString(checker)) {
        if (!isTypeOf(args, checker))
            throw new TypeError(`Arg type mismatch. Required ${checker}, found ${args}.`);
    } else if (isArrayType(checker)) {
        if (!isArray(args))
            throw new TypeError(`Expected an array of ${JSON.stringify(checker.elemType)} but got ${args}.`);

        args.forEach(arg => {
            typeCheck(arg, checker.elemType);
        });
    } else if (isArray(checker)) {
        if (args.length !== checker.length)
            throw new TypeError(`Arg length mismatch. Required ${args.length}, found ${checker.length} args in ${args}.`);

        checker.forEach((typ, idx) => {
            typeCheck(args[idx], typ)
        });
    } else {
        Object.keys(checker).forEach(fieldName => {
            const isRequired = fieldName.endsWith('!');
            const realFieldName = isRequired ? fieldName.slice(0, -1) : fieldName;

            if (args.hasOwnProperty(realFieldName)) {
                typeCheck(args[realFieldName], checker[fieldName])
            } else if (isRequired) {
                throw new TypeError(`Missing field '${realFieldName}' in given args: ${JSON.stringify(args)}.`);
            }
        });
    }
};

const asyncExec = (clazz, checker, func, args) => {
    typeCheck(args, checker);
    return new Promise((resolve, reject) => {
        exec(resolve, reject, clazz, func, args);
    });
};

const callbackExec = (clazz, checker, func, args, onSuccess, onError) => {
    typeCheck(args, checker);
    exec(onSuccess, onError, clazz, func, args);
};

// /////////////////////////////////////////////////////////
// CORDOVA UTILS
// /////////////////////////////////////////////////////////

// TODO: call this somewhere
const initHms = () => {
    console.log('hms :: init called.');
    initEventHandler();
    initConstantSetter();
};

const initEventHandler = () => {
    if (window.hmsEventHandler != null) {
        return;
    }

    console.log('hms-inapppurchases :: window.hmsEventHandler');
    window.hmsEventHandlers = {};

    window.hmsEventHandler = (eventName, data) => {
        console.log('eventReceived: ' + eventName + ' with data: ', data);
        if (hmsEventHandlers.hasOwnProperty(eventName)) {
            hmsEventHandlers[eventName].forEach(handler => {
                handler(data);
            });
        }
    }

    window.registerHMSEvent = (eventName, handler) => {
        if (hmsEventHandlers.hasOwnProperty(eventName)) {
            hmsEventHandlers[eventName].push(handler);
        } else {
            hmsEventHandlers[eventName] = [handler];
        }
    };

    window.unregisterHMSEvent = () => {
        // TODO: unregisterHMSEvent
    };
};

const initConstantSetter = () => {
    if (window.hmsSetConstants != null) {
        return;
    }

    console.log('hms-inapppurchases :: window.hmsSetConstants');
    window.hmsSetConstants = (objName, constants) => {
        console.log('hms-inapppurchases :: initializing constants for', objName, 'with', constants);

        if (window[objName] == null) {
            console.log('hms-inapppurchases :: uninitialized obj');
            return;
        }

        Object.keys(constants).forEach(key => {
            Object.defineProperty(window[objName], key, {value: constants[key]});
        });
    };
};

// Attach every defined function in exportedFunctions
// to prototype of carrierObj object. Every function is
// async by default and callback variations are also available
// with `cb` prefix.
const generateFunctionVariations = (exportedFunctions, carrierObj, javaClassName) => {
    exportedFunctions.forEach(funcInfo => {
        const asyncFn = (...argList) => {
            console.log({argList, typ: funcInfo.type, funcInfo})
            typeCheck(argList, funcInfo.type)
            return asyncExec(javaClassName, funcInfo.type, funcInfo.name, argList);
        };

        const callbackFn = (...argList) => {
            const realArgs = argList.slice(0, argList.length - 2);
            const onErr = argList[argList.length - 1];
            const onSucc = argList[argList.length - 2];
            callbackExec(javaClassName, funcInfo.type, funcInfo.name, realArgs, onSucc, onErr);
        };

        carrierObj.prototype[mkFnName('cb', funcInfo.name)] = callbackFn;
        carrierObj.prototype[funcInfo.name] = asyncFn;
    });
};

// /////////////////////////////////////////////////////////
// INIT
// /////////////////////////////////////////////////////////

initHms();

// /////////////////////////////////////////////////////////
// EXPORT
// /////////////////////////////////////////////////////////

module.exports = {
    arrayOf,
    typeCheck,
    generateFunctionVariations
};

function createPermissionLayout(result, newElement, pos, neg) {
    if (result === true) {
        newElement.innerHTML = pos;
        newElement.classList.remove('alert-danger');
        newElement.classList.add('alert-success');
    } else {
        newElement.innerHTML = neg;
        newElement.classList.remove('alert-success');
        newElement.classList.add('alert-danger');
    }
}

/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
import { IonicNativePlugin } from '@ionic-native/core';
export declare class HMSMapOriginal extends IonicNativePlugin {
    getMap(divId: string, huaweiMapOptions: HuaweiMapOptions, bounds?: MapBounds): Promise<HuaweiMap>;
    showMap(divId: string): Promise<HuaweiMap>;
    hasPermission(): Promise<boolean>;
    requestPermission(): Promise<void>;
    computeDistanceBetween(from: LatLng, to: LatLng): Promise<ComputeDistanceResult>;
    setApiKey(apiKey: string): Promise<void>;
    disableLogger(): Promise<void>;
    enableLogger(): Promise<void>;
}
export declare class CameraUpdateFactory {
    private constructor();
    static newCameraPosition(cameraPosition: CameraPosition): CameraUpdate;
    static newLatLng(latLng: LatLng): CameraUpdate;
    static newLatLngBounds(latLngBounds: LatLngBounds, padding: number): CameraUpdate;
    static newLatLngZoom(latLng: LatLng, zoom: number): CameraUpdate;
    static scrollBy(xPixel: number, yPixel: number): CameraUpdate;
    static zoomBy(amount: number): CameraUpdate;
    static zoomIn(): CameraUpdate;
    static zoomOut(): CameraUpdate;
    static zoomTo(zoom: number): CameraUpdate;
}
export declare class MapStyleOptions {
    private readonly resourceId;
    private constructor();
    static loadRawResourceStyle(resourceId: number): MapStyleOptions;
    getResourceId(): number;
}
export declare abstract class Cap {
    static readonly TYPE_BUTT_CAP = 0;
    static readonly TYPE_SQUARE_CAP = 1;
    static readonly TYPE_ROUND_CAP = 2;
    static readonly TYPE_CUSTOM_CAP = 3;
    protected type: number;
    protected refWidth?: number;
    protected bitmapDescriptor?: BitmapDescriptor;
    getType(): number;
}
export declare class ButtCap extends Cap {
    constructor();
}
export declare class RoundCap extends Cap {
    constructor();
}
export declare class SquareCap extends Cap {
    constructor();
}
export declare class CustomCap extends Cap {
    constructor(bitmapDescriptor: BitmapDescriptor, refWidth?: number);
    getRefWidth(): number;
    getBitmapDescriptor(): BitmapDescriptor;
}
export declare class AnimationSet {
    readonly animations: Map<string, Animation>;
    addRotateAnimation(animation: RotateAnimation): void;
    addScaleAnimation(animation: ScaleAnimation): void;
    addTranslateAnimation(animation: TranslateAnimation): void;
    addAlphaAnimation(animation: AlphaAnimation): void;
}
export interface UiSettings {
    isCompassEnabled(): Promise<boolean>;
    isIndoorLevelPickerEnabled(): Promise<boolean>;
    isMapToolbarEnabled(): Promise<boolean>;
    isMyLocationButtonEnabled(): Promise<boolean>;
    isRotateGesturesEnabled(): Promise<boolean>;
    isScrollGesturesEnabled(): Promise<boolean>;
    isScrollGesturesEnabledDuringRotateOrZoom(): Promise<boolean>;
    isTiltGesturesEnabled(): Promise<boolean>;
    isZoomControlsEnabled(): Promise<boolean>;
    isZoomGesturesEnabled(): Promise<boolean>;
    setAllGesturesEnabled(allGesturesEnabled: boolean): Promise<void>;
    setCompassEnabled(compassEnabled: boolean): Promise<void>;
    setIndoorLevelPickerEnabled(indoorLevelPickerEnabled: boolean): Promise<void>;
    setMapToolbarEnabled(mapToolbarEnabled: boolean): Promise<void>;
    setMyLocationButtonEnabled(myLocationButtonEnabled: boolean): Promise<void>;
    setRotateGesturesEnabled(rotateGesturesEnabled: boolean): Promise<void>;
    setScrollGesturesEnabled(scrollGesturesEnabled: boolean): Promise<void>;
    setScrollGesturesEnabledDuringRotateOrZoom(scrollGesturesEnabledDuringRotateOrZoom: boolean): Promise<void>;
    setTiltGesturesEnabled(tiltGesturesEnabled: boolean): Promise<void>;
    setZoomControlsEnabled(zoomControlsEnabled: boolean): Promise<void>;
    setZoomGesturesEnabled(zoomGesturesEnabled: boolean): Promise<void>;
    setGestureScaleByMapCenter(gestureScaleByMapCenterEnabled: boolean): Promise<void>;
}
export interface HuaweiMap {
    on(event: MapEvent, callback: (val: any) => void): Promise<void>;
    destroyMap(): Promise<void>;
    hideMap(): Promise<void>;
    getComponent(key: string): any;
    removeComponent(key: string): void;
    getId(): number;
    scroll(): void;
    addCircle(circleOptions: CircleOptions): Promise<Circle>;
    addMarker(markerOptions: MarkerOptions): Promise<Marker>;
    addGroundOverlay(groundOverlayOptions: GroundOverlayOptions): Promise<GroundOverlay>;
    addTileOverlay(tileOverlayOptions: TileOverlayOptions): Promise<TileOverlay>;
    addPolygon(polygonOptions: PolygonOptions): Promise<Polygon>;
    addPolyline(polylineOptions: PolylineOptions): Promise<Polyline>;
    animateCamera(cameraUpdate: CameraUpdate): Promise<void>;
    animateCamera(cameraUpdate: CameraUpdate, cancelableCallback: CancelableCallback): Promise<void>;
    animateCamera(cameraUpdate: CameraUpdate, cancelableCallback?: CancelableCallback, durationMs?: number): Promise<void>;
    moveCamera(cameraUpdate: CameraUpdate): Promise<void>;
    clear(): Promise<void>;
    resetMinMaxZoomPreference(): Promise<void>;
    stopAnimation(): Promise<void>;
    getCameraPosition(): Promise<CameraPosition>;
    getMapType(): Promise<MapType>;
    getMaxZoomLevel(): Promise<number>;
    getMinZoomLevel(): Promise<number>;
    getProjection(): Projection;
    getUiSettings(): UiSettings;
    isBuildingsEnabled(): Promise<boolean>;
    isMyLocationEnabled(): Promise<boolean>;
    isTrafficEnabled(): Promise<boolean>;
    isIndoorEnabled(): Promise<boolean>;
    setBuildingsEnabled(buildingsEnabled: boolean): Promise<void>;
    setContentDescription(contentDescription: string): Promise<void>;
    setInfoWindowAdapter(infoWindowAdapter: InfoWindowAdapter): Promise<void>;
    setLatLngBoundsForCameraTarget(latLngBoundsForCameraTarget: LatLngBounds): Promise<void>;
    setLocationSource(locationSource: LocationSource): Promise<void>;
    setMapStyle(mapStyle: MapStyleOptions): Promise<void>;
    setMapType(mapType: MapType): Promise<void>;
    setMarkersClustering(markersClustering: boolean): Promise<void>;
    setMaxZoomPreference(maxZoomPreference: number): Promise<void>;
    setMinZoomPreference(minZoomPreference: number): Promise<void>;
    setMyLocationEnabled(myLocationEnabled: boolean): Promise<void>;
    setPadding(left: number, top: number, right: number, bottom: number): Promise<void>;
    setTrafficEnabled(trafficEnabled: boolean): Promise<void>;
    snapshot(onReadyCallback: (snapshot: SnapshotResult) => void): Promise<void>;
    setMapPointersEnabled(mapPointersEnabled: boolean): Promise<void>;
    isMapPointersEnabled(): Promise<boolean>;
    setPointToCenter(x: number, y: number): Promise<void>;
}
export interface CameraUpdate {
    moveCamera(mapId: string): Promise<any>;
    animateCamera(mapId: string, props: any): Promise<any>;
}
export interface Circle {
    getCenter(): Promise<LatLng>;
    getFillColor(): Promise<Color>;
    getId(): string;
    getRadius(): Promise<number>;
    getStrokeColor(): Promise<Color>;
    getStrokePattern(): Promise<PatternItem[]>;
    getStrokeWidth(): Promise<number>;
    getTag(): Promise<any>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    remove(): Promise<void>;
    setCenter(center: LatLng): Promise<void>;
    setFillColor(fillColor: Color): Promise<void>;
    setRadius(radius: number): Promise<void>;
    setStrokeColor(strokeColor: Color): Promise<void>;
    setStrokePattern(strokePattern: PatternItem[]): Promise<void>;
    setStrokeWidth(strokeWidth: number): Promise<void>;
    setTag(tag: any): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
}
export interface GroundOverlay {
    getBearing(): Promise<number>;
    getBounds(): Promise<LatLngBounds>;
    getHeight(): Promise<number>;
    getId(): string;
    getPosition(): Promise<LatLng>;
    getTag(): Promise<any>;
    getTransparency(): Promise<number>;
    getWidth(): Promise<number>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    remove(): Promise<void>;
    setBearing(bearing: number): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setDimensions(width: number, height: number): Promise<void>;
    setDimensions(width: number): Promise<void>;
    setImage(imageDescriptor: BitmapDescriptor): Promise<void>;
    setPosition(position: LatLng): Promise<void>;
    setPositionFromBounds(positionLatLngBounds: LatLngBounds): Promise<void>;
    setTag(tag: any): Promise<void>;
    setTransparency(transparency: number): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
}
export interface Marker {
    getAlpha(): Promise<number>;
    getId(): string;
    getPosition(): Promise<LatLng>;
    getRotation(): Promise<number>;
    getSnippet(): Promise<string>;
    getTag(): Promise<any>;
    getTitle(): Promise<string>;
    getZIndex(): Promise<number>;
    isVisible(): Promise<boolean>;
    isClusterable(): Promise<boolean>;
    isDraggable(): Promise<boolean>;
    isFlat(): Promise<boolean>;
    isInfoWindowShown(): Promise<boolean>;
    remove(): Promise<void>;
    hideInfoWindow(): Promise<void>;
    showInfoWindow(): Promise<void>;
    startAnimation(): Promise<void>;
    setAlpha(alpha: number): Promise<void>;
    setAnimation(animation: AnimationSet): Promise<void>;
    setDraggable(draggable: boolean): Promise<void>;
    setFlat(flat: boolean): Promise<void>;
    setIcon(icon: BitmapDescriptor): Promise<void>;
    setInfoWindowAnchor(u: number, v: number): Promise<void>;
    setMarkerAnchor(u: number, v: number): Promise<void>;
    setPosition(latLng: LatLng): Promise<void>;
    setRotation(rotation: number): Promise<void>;
    setSnippet(snippet: String): Promise<void>;
    setTitle(title: string): Promise<void>;
    setTag(tag: any): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
}
export interface Polygon {
    getFillColor(): Promise<Color>;
    getHoles(): Promise<LatLng[][]>;
    getId(): string;
    getPoints(): Promise<LatLng[]>;
    getStrokeColor(): Promise<Color>;
    getStrokeJointType(): Promise<JointType>;
    getStrokePattern(): Promise<PatternItem[]>;
    getStrokeWidth(): Promise<number>;
    getTag(): Promise<any>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    isGeodesic(): Promise<boolean>;
    remove(): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setFillColor(color: Color): Promise<void>;
    setGeodesic(geodesic: boolean): Promise<void>;
    setHoles(holes: LatLng[][]): Promise<void>;
    setPoints(points: LatLng[]): Promise<void>;
    setStrokeColor(color: Color): Promise<void>;
    setStrokeJointType(jointType: JointType): Promise<void>;
    setStrokePattern(patternItem: PatternItem[]): Promise<void>;
    setStrokeWidth(width: number): Promise<void>;
    setTag(tag: any): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
}
export interface Polyline {
    getColor(): Promise<Color>;
    getEndCap(): Promise<Cap>;
    getStartCap(): Promise<Cap>;
    getId(): string;
    getJointType(): Promise<JointType>;
    getPattern(): Promise<PatternItem[]>;
    getPoints(): Promise<LatLng[]>;
    getTag(): Promise<any>;
    getWidth(): Promise<number>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isGeodesic(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    remove(): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setColor(color: Color): Promise<void>;
    setStartCap(startCap: Cap): Promise<void>;
    setEndCap(endCap: Cap): Promise<void>;
    setGeodesic(geodesic: boolean): Promise<void>;
    setJointType(jointType: JointType): Promise<void>;
    setPattern(pattern: PatternItem[]): Promise<void>;
    setPoints(points: LatLng[]): Promise<void>;
    setTag(tag: any): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setWidth(width: number): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
}
export interface TileOverlay {
    getFadeIn(): Promise<boolean>;
    getId(): string;
    getTransparency(): Promise<number>;
    getZIndex(): Promise<number>;
    isVisible(): Promise<boolean>;
    remove(): Promise<void>;
    clearTileCache(): Promise<void>;
    setFadeIn(fadeIn: boolean): Promise<void>;
    setTransparency(transparency: number): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
}
export interface Projection {
    fromScreenLocation(point: Point): Promise<LatLng>;
    getVisibleRegion(): Promise<VisibleRegion>;
    toScreenLocation(latLng: LatLng): Promise<Point>;
}
export interface MapBounds {
    marginTop?: number;
    marginBottom?: number;
}
export interface HuaweiMapOptions {
    mapType?: MapType;
    zoomControlsEnabled?: boolean;
    compassEnabled?: boolean;
    zoomGesturesEnabled?: boolean;
    scrollGesturesEnabled?: boolean;
    rotateGesturesEnabled?: boolean;
    tiltGesturesEnabled?: boolean;
    zOrderOnTop?: boolean;
    liteMode?: boolean;
    ambientEnabled?: boolean;
    minZoomPreference?: number;
    maxZoomPreference?: number;
    cameraPosition?: CameraPosition;
    latLngBounds?: LatLngBounds;
}
export interface Location {
    accuracy: number;
    altitude: number;
    bearing: number;
    elapsedRealtimeNanos: number;
    latitude: number;
    longitude: number;
    provider: string;
    speed: number;
    time: number;
    fromMockProvider: boolean;
    contents: number;
    bearingAccuracyDegrees?: number;
    speedAccuracyMetersPerSecond?: number;
    verticalAccuracyMeters?: number;
}
export interface LatLngBounds {
    southwest: LatLng;
    northeast: LatLng;
}
export interface CameraPosition {
    target: LatLng;
    zoom?: number;
    bearing?: number;
    tilt?: number;
}
export interface LatLng {
    lat: number;
    lng: number;
}
export interface CircleOptions {
    center: LatLng;
    clickable?: boolean;
    fillColor?: Color;
    radius: number;
    strokeColor?: Color;
    strokeWidth?: number;
    strokePattern?: PatternItem[];
    visible?: boolean;
    zIndex?: number;
}
export interface POI {
    latLng: LatLng;
    name?: string;
    placeId?: string;
}
export interface PatternItem {
    type: PatternItemType;
    length: number;
}
export interface MarkerOptions {
    anchorMarker?: Anchor;
    infoWindowAnchor?: Anchor;
    infoWindowShown?: boolean;
    alpha?: number;
    clusterable?: boolean;
    draggable?: boolean;
    icon?: BitmapDescriptor;
    flat?: boolean;
    position: LatLng;
    rotation?: number;
    snippet?: string;
    title?: string;
    visible?: boolean;
    zIndex?: number;
}
export interface ScaledSize {
    width: number;
    height: number;
}
export interface Asset {
    fileName: string;
    scaledSize?: ScaledSize;
}
export interface Resource {
    fileName: string;
    resourceType: string;
    scaledSize?: ScaledSize;
}
export interface BitmapDescriptor {
    hue?: Hue;
    asset?: Asset;
    resource?: Resource;
}
export interface Anchor {
    u?: number;
    v?: number;
}
export interface PolygonOptions {
    points: LatLng[];
    holes?: LatLng[][];
    clickable?: boolean;
    geodesic?: boolean;
    fillColor?: Color;
    strokeColor?: Color;
    strokeJointType?: JointType;
    strokePattern?: PatternItem[];
    strokeWidth?: number;
    visible?: true;
    zIndex?: number;
}
export interface PolylineOptions {
    points: LatLng[];
    clickable?: boolean;
    color?: Color;
    startCap?: Cap;
    pattern?: PatternItem[];
    endCap?: Cap;
    geodesic?: boolean;
    jointType?: JointType;
    visible?: boolean;
    width?: number;
    zIndex?: number;
}
export interface GroundOverlayOptions {
    width?: number;
    height?: number;
    anchor?: Anchor;
    bearing?: number;
    clickable?: boolean;
    image?: BitmapDescriptor;
    visible?: boolean;
    transparency?: number;
    zIndex?: number;
    position: Position;
    bounds?: LatLngBounds;
}
export interface Position {
    latLng: LatLng;
    width: number;
    height?: number;
}
export interface URLTile {
    URL: string;
}
export interface Tile {
    x: number;
    y: number;
    width: number;
    height: number;
    zoom: number;
    path: string;
}
export interface RepetitiveTile {
    width: number;
    height: number;
    zoom: number[];
    path: string;
}
export interface TileProvider {
    type: TileType;
    data: Tile[] | URLTile | RepetitiveTile;
}
export interface TileOverlayOptions {
    tileProvider: TileProvider;
    fadeIn?: boolean;
    transparency?: number;
    visible?: boolean;
    zIndex?: number;
}
export interface Animation {
    duration?: number;
    repeatCount?: number;
    repeatMode?: number;
    interpolator?: Interpolator;
    animationStart?: () => void;
    animationEnd?: () => void;
}
export interface RotateAnimation extends Animation {
    fromDegree: number;
    toDegree: number;
}
export interface ScaleAnimation extends Animation {
    fromX: number;
    toX: number;
    fromY: number;
    toY: number;
}
export interface TranslateAnimation extends Animation {
    target: LatLng;
}
export interface AlphaAnimation extends Animation {
    fromAlpha: number;
    toAlpha: number;
}
export interface CancelableCallback {
    onFinish: () => void;
    onCancel: () => void;
}
export interface InfoWindowAdapter {
    file: string;
    width: number;
    height: number;
}
export interface LocationSource {
}
export interface ComputeDistanceResult {
    result: number;
}
export interface Point {
    x: number;
    y: number;
}
export interface SnapshotResult {
    data: string;
}
export interface VisibleRegion {
    farLeft: LatLng;
    farRight: LatLng;
    latLngBounds: LatLngBounds;
    nearLeft: LatLng;
    nearRight: LatLng;
}
export interface Interpolator {
    type: InterpolatorType;
    args?: any;
}
export declare enum TileType {
    URL_TILE = 0,
    REPETITIVE_TILE = 1,
    LOCAL_TILE = 2
}
export declare enum Color {
    RED = -65536,
    DARK_GRAY = -12303292,
    GRAY = -7829368,
    WHITE = -1,
    BLUE = -16776961,
    BLACK = -16777216,
    LITE_GRAY = -3355444,
    MAGENTA = -65281,
    YELLOW = -256,
    CYAN = -16711681,
    GREEN = -16711936,
    TRANSPARENT = 0
}
export declare enum JointType {
    ROUND = 2,
    BEVEL = 1,
    DEFAULT = 0
}
export declare enum MapEvent {
    ON_INDOOR_BUILDINGS_FOCUSED = "onIndoorBuildingsFocused",
    ON_INDOOR_LEVEL_ACTIVATED = "onIndoorLevelActivated",
    ON_MAP_LOADED = "onMapLoaded",
    ON_CAMERA_IDLE = "onCameraIdle",
    ON_CAMERA_MOVE_CANCELED = "onCameraMoveCanceled",
    ON_CAMERA_MOVE = "onCameraMove",
    ON_CAMERA_MOVE_STARTED = "onCameraMoveStarted",
    ON_CIRCLE_CLICK = "onCircleClick",
    ON_GROUND_OVERLAY_CLICK = "onGroundOverlayClick",
    ON_INFO_WINDOW_CLICK = "onInfoWindowClick",
    ON_INFO_WINDOW_CLOSE = "onInfoWindowClose",
    ON_INFO_WINDOW_LONG_CLICK = "onInfoWindowLongClick",
    ON_MAP_CLICK = "onMapClick",
    ON_MAP_LONG_CLICK = "onMapLongClick",
    ON_MARKER_CLICK = "onMarkerClick",
    ON_MARKER_DRAG_START = "onMarkerDragStart",
    ON_MARKER_DRAG = "onMarkerDrag",
    ON_MARKER_DRAG_END = "onMarkerDragEnd",
    ON_MY_LOCATION_BUTTON_CLICK = "onMyLocationButtonClick",
    ON_MY_LOCATION_CLICK = "onMyLocationClick",
    ON_POI_CLICK = "onPoiClick",
    ON_POLYGON_CLICK = "onPolygonClick",
    ON_POLYLINE_CLICK = "onPolylineClick",
    ON_CANCELABLE_CALLBACK_FINISH = "onCancelableCallbackFinish",
    ON_CANCELABLE_CALLBACK_CANCEL = "onCancelableCallbackCancel",
    ON_SNAPSHOT_READY_CALLBACK = "onSnapshotReadyCallback"
}
export declare enum MapType {
    MAP_TYPE_NONE = 0,
    MAP_TYPE_SATELLITE = 2,
    MAP_TYPE_NORMAL = 1,
    MAP_TYPE_HYBRID = 4,
    MAP_TYPE_TERRAIN = 3
}
export declare enum Hue {
    HUE_GREEN = 120,
    HUE_AZURE = 210,
    HUE_ROSE = 330,
    HUE_CYAN = 180,
    HUE_ORANGE = 30,
    HUE_MAGENTA = 300,
    HUE_VIOLET = 270,
    HUE_YELLOW = 60,
    HUE_BLUE = 240,
    HUE_RED = 0
}
export declare enum PatternItemType {
    TYPE_GAP = 2,
    TYPE_DOT = 1,
    TYPE_DASH = 0
}
export declare enum CameraMoveStartedReason {
    REASON_API_ANIMATION = 2,
    REASON_DEVELOPER_ANIMATION = 3,
    REASON_GESTURE = 1
}
export declare enum InterpolatorType {
    LINEAR = 0,
    ACCELERATE_DECELERATE = 1,
    ACCELERATE = 2,
    ANTICIPATE = 3,
    ANTICIPATE_OVERSHOOT = 4,
    BOUNCE = 5,
    CYCLE = 6,
    DECELERATE = 7,
    OVERSHOOT = 8,
    PATH = 9
}

export declare const HMSMap: HMSMapOriginal;
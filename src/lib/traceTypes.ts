// To parse this data:
//
//   import { Convert, Types } from "./file";
//
//   const types = Convert.toTypes(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Trace {
    traceEvents: TraceEvent[];
    metadata:    Metadata;
}

export interface Metadata {
    "chrome-bitness":         number;
    "clock-domain":           string;
    command_line:             string;
    "cpu-brand":              string;
    "cpu-family":             number;
    "cpu-model":              number;
    "cpu-stepping":           number;
    "field-trials":           string[];
    "gpu-devid":              number;
    "gpu-driver":             string;
    "gpu-features":           GPUFeatures;
    "gpu-glver":              string;
    "gpu-psver":              string;
    "gpu-venid":              number;
    "gpu-vsver":              string;
    "highres-ticks":          number;
    "network-type":           string;
    "num-cpus":               number;
    "os-arch":                string;
    "os-name":                string;
    "os-version":             string;
    "physical-memory":        number;
    "product-version":        string;
    revision:                 string;
    "trace-capture-datetime": Date;
    "trace-config":           string;
    trace_processor_stats:    TraceProcessorStats;
    "user-agent":             string;
    "v8-version":             string;
}

export interface GPUFeatures {
    "2d_canvas":              string;
    canvas_oop_rasterization: string;
    gpu_compositing:          string;
    metal:                    string;
    multiple_raster_threads:  string;
    oop_rasterization:        string;
    opengl:                   string;
    rasterization:            string;
    raw_draw:                 string;
    skia_renderer:            string;
    video_decode:             string;
    video_encode:             string;
    webgl:                    string;
    webgl2:                   string;
}

export interface TraceProcessorStats {
    android_log_num_failed:                number;
    android_log_num_skipped:               number;
    android_log_num_total:                 number;
    clock_sync_cache_miss:                 number;
    clock_sync_failure:                    number;
    compact_sched_has_parse_errors:        number;
    compact_sched_switch_skipped:          number;
    compact_sched_waking_skipped:          number;
    counter_events_out_of_order:           number;
    deobfuscate_location_parse_error:      number;
    empty_chrome_metadata:                 number;
    flow_duplicate_id:                     number;
    flow_end_without_start:                number;
    flow_invalid_id:                       number;
    flow_no_enclosing_slice:               number;
    flow_step_without_start:               number;
    flow_without_direction:                number;
    frame_timeline_event_parser_errors:    number;
    ftrace_bundle_tokenizer_errors:        number;
    ftrace_packet_before_tracing_start:    number;
    fuchsia_invalid_event:                 number;
    fuchsia_non_numeric_counters:          number;
    fuchsia_timestamp_overflow:            number;
    gpu_counters_invalid_spec:             number;
    gpu_counters_missing_spec:             number;
    gpu_render_stage_parser_errors:        number;
    graphics_frame_event_parser_errors:    number;
    guess_trace_type_duration_ns:          number;
    heap_graph_non_finalized_graph:        number;
    heapprofd_missing_packet:              number;
    heapprofd_non_finalized_profile:       number;
    interned_data_tokenizer_errors:        number;
    invalid_clock_snapshots:               number;
    invalid_cpu_times:                     number;
    json_display_time_unit_too_late:       number;
    json_parser_failure:                   number;
    json_tokenizer_failure:                number;
    meminfo_unknown_keys:                  number;
    memory_snapshot_parser_failure:        number;
    metatrace_overruns:                    number;
    mismatched_sched_switch_tids:          number;
    misplaced_end_event:                   number;
    mm_unknown_type:                       number;
    ninja_parse_errors:                    number;
    packages_list_has_parse_errors:        number;
    packages_list_has_read_errors:         number;
    parse_trace_duration_ns:               number;
    perf_samples_skipped:                  number;
    perf_samples_skipped_dataloss:         number;
    power_rail_unknown_index:              number;
    proc_stat_unknown_counters:            number;
    process_tracker_errors:                number;
    rss_stat_negative_size:                number;
    rss_stat_unknown_keys:                 number;
    rss_stat_unknown_thread_for_mm_id:     number;
    sched_switch_out_of_order:             number;
    sched_waking_out_of_order:             number;
    slice_out_of_order:                    number;
    sorter_push_event_out_of_order:        number;
    stackprofile_invalid_callstack_id:     number;
    stackprofile_invalid_frame_id:         number;
    stackprofile_invalid_mapping_id:       number;
    stackprofile_invalid_string_id:        number;
    stackprofile_parser_error:             number;
    systrace_parse_failure:                number;
    task_state_invalid:                    number;
    thread_time_in_state_out_of_order:     number;
    thread_time_in_state_unknown_cpu_freq: number;
    tokenizer_skipped_packets:             number;
    traced_buf:                            { [key: string]: number }[];
    traced_chunks_discarded:               number;
    traced_data_sources_registered:        number;
    traced_data_sources_seen:              number;
    traced_patches_discarded:              number;
    traced_producers_connected:            number;
    traced_producers_seen:                 number;
    traced_total_buffers:                  number;
    traced_tracing_sessions:               number;
    track_event_parser_errors:             number;
    track_event_tokenizer_errors:          number;
    vmstat_unknown_keys:                   number;
    vulkan_allocations_invalid_string_id:  number;
}

export interface TraceEvent {
    args:   Args;
    cat:    Cat;
    name:   Name;
    ph:     Ph;
    pid:    number;
    tid:    number;
    ts:     number;
    dur?:   number;
    tdur?:  number;
    tts?:   number;
    s?:     S;
    id?:    string;
    id2?:   Id2;
    scope?: Cat;
}

export interface Args {
    name?:                                     string;
    uptime?:                                   string;
    src_file?:                                 string;
    src_func?:                                 string;
    chrome_mojo_event_info?:                   ChromeMojoEventInfo;
    data?:                                     Data;
    layerTreeId?:                              number;
    frame?:                                    string;
    frameSeqId?:                               number;
    layerId?:                                  number;
    frameId?:                                  number;
    tileData?:                                 TileData;
    fileName?:                                 string;
    beginData?:                                BeginData;
    endData?:                                  EndData;
    KeyWin?:                                   number;
    chrome_latency_info?:                      ChromeLatencyInfo;
    microtask_count?:                          number;
    elementCount?:                             number;
    afterUserInput?:                           number;
    LazyPixelRef?:                             number;
    chrome_raster_task?:                       ChromeRasterTask;
    pixelRefId?:                               number;
    hasPartialUpdate?:                         boolean;
    type?:                                     ArgsType;
    usedHeapSizeAfter?:                        number;
    usedHeapSizeBefore?:                       number;
    epoch?:                                    number;
    chrome_legacy_ipc?:                        ChromeLegacyIPC;
    imageType?:                                string;
    snapshot?:                                 string;
    number?:                                   number;
    sort_index?:                               number;
    labels?:                                   string;
    chrome_frame_reporter?:                    ChromeFrameReporter;
    state?:                                    ArgsState;
    chrome_renderer_scheduler_state?:          ChromeRendererSchedulerState;
    send_begin_mainframe_to_commit_breakdown?: { [key: string]: number };
    aborted_main?:                             number;
    no_damage_main?:                           number;
}

export interface BeginData {
    frame:          string;
    startLine?:     number;
    url?:           string;
    dirtyObjects?:  number;
    partialLayout?: boolean;
    totalObjects?:  number;
    stackTrace?:    StackTrace[];
}

export interface StackTrace {
    columnNumber?: number;
    functionName:  string;
    lineNumber?:   number;
    scriptId:      number;
    url?:          string;
    codeType?:     CodeType;
}

export enum CodeType {
    JS = "JS",
    Other = "other",
}

export interface ChromeFrameReporter {
    frame_sequence:           number;
    frame_source:             number;
    has_compositor_animation: boolean;
    has_main_animation:       boolean;
    has_missing_content:      boolean;
    has_smooth_input_main:    boolean;
    layer_tree_host_id:       number;
    scroll_state:             ScrollState;
    state:                    ChromeFrameReporterState;
    affects_smoothness?:      boolean;
}

export enum ScrollState {
    ScrollNone = "SCROLL_NONE",
}

export enum ChromeFrameReporterState {
    StateDropped = "STATE_DROPPED",
    StateNoUpdateDesired = "STATE_NO_UPDATE_DESIRED",
    StatePresentedAll = "STATE_PRESENTED_ALL",
    StatePresentedPartial = "STATE_PRESENTED_PARTIAL",
}

export interface ChromeLatencyInfo {
    step?:           Step;
    trace_id:        number;
    component_info?: ComponentInfo[];
    is_coalesced?:   boolean;
}

export interface ComponentInfo {
    component_type: ComponentType;
    time_us:        number;
}

export enum ComponentType {
    ComponentInputEventLatencyBeginRwh = "COMPONENT_INPUT_EVENT_LATENCY_BEGIN_RWH",
    ComponentInputEventLatencyOriginal = "COMPONENT_INPUT_EVENT_LATENCY_ORIGINAL",
    ComponentInputEventLatencyRendererMain = "COMPONENT_INPUT_EVENT_LATENCY_RENDERER_MAIN",
    ComponentInputEventLatencyUI = "COMPONENT_INPUT_EVENT_LATENCY_UI",
}

export enum Step {
    StepSendInputEventUI = "STEP_SEND_INPUT_EVENT_UI",
}

export interface ChromeLegacyIPC {
    message_class: MessageClass;
    message_line:  number;
}

export enum MessageClass {
    ClassExtension = "CLASS_EXTENSION",
}

export interface ChromeMojoEventInfo {
    watcher_notify_interface_tag?: string;
    mojo_interface_tag?:           MojoInterfaceTag;
}

export enum MojoInterfaceTag {
    BlinkMojomBrowserInterfaceBroker = "blink.mojom.BrowserInterfaceBroker",
    BlinkMojomCodeCacheHost = "blink.mojom.CodeCacheHost",
    BlinkMojomDOMStorageProvider = "blink.mojom.DomStorageProvider",
    BlinkMojomDiskAllocator = "blink.mojom.DiskAllocator",
    BlinkMojomEmbeddedWorkerInstanceClient = "blink.mojom.EmbeddedWorkerInstanceClient",
    BlinkMojomGPUDataManager = "blink.mojom.GpuDataManager",
    BlinkMojomImageDownloader = "blink.mojom.ImageDownloader",
    BlinkMojomKeepAliveHandleFactory = "blink.mojom.KeepAliveHandleFactory",
    BlinkMojomManifestManager = "blink.mojom.ManifestManager",
    BlinkMojomPluginRegistry = "blink.mojom.PluginRegistry",
    BlinkMojomServiceWorker = "blink.mojom.ServiceWorker",
    BlinkMojomStorageArea = "blink.mojom.StorageArea",
    BlinkMojomStorageAreaObserver = "blink.mojom.StorageAreaObserver",
    BlinkMojomV8DetailedMemoryReporter = "blink.mojom.V8DetailedMemoryReporter",
    BlinkMojomWebSocketConnector = "blink.mojom.WebSocketConnector",
    BlinkMojomWidgetInputHandler = "blink.mojom.WidgetInputHandler",
    CERTVerifierMojomCERTVerifierRequest = "cert_verifier.mojom.CertVerifierRequest",
    CERTVerifierMojomCERTVerifierService = "cert_verifier.mojom.CertVerifierService",
    CcMojomRenderFrameMetadataObserverClient = "cc.mojom.RenderFrameMetadataObserverClient",
    ContentMojomChildHistogramFetcherFactory = "content.mojom.ChildHistogramFetcherFactory",
    ContentMojomChildProcess = "content.mojom.ChildProcess",
    ContentMojomChildProcessHost = "content.mojom.ChildProcessHost",
    ContentMojomFieldTrialRecorder = "content.mojom.FieldTrialRecorder",
    ContentMojomSandboxSupportMAC = "content.mojom.SandboxSupportMac",
    ContentSettingsMojomContentSettingsManager = "content_settings.mojom.ContentSettingsManager",
    DataDecoderMojomDataDecoderService = "data_decoder.mojom.DataDecoderService",
    DataDecoderMojomXMLParser = "data_decoder.mojom.XmlParser",
    DeviceMojomDeviceService = "device.mojom.DeviceService",
    DeviceMojomPowerMonitor = "device.mojom.PowerMonitor",
    DeviceMojomPowerMonitorClient = "device.mojom.PowerMonitorClient",
    DeviceMojomTimeZoneMonitor = "device.mojom.TimeZoneMonitor",
    DiscardableMemoryMojomDiscardableSharedMemoryManager = "discardable_memory.mojom.DiscardableSharedMemoryManager",
    IPCChannel = "IPC Channel",
    MediaRouterMojomLogger = "media_router.mojom.Logger",
    MediaRouterMojomMediaRouter = "media_router.mojom.MediaRouter",
    MemoryInstrumentationMojomCoordinatorConnector = "memory_instrumentation.mojom.CoordinatorConnector",
    MetricsMojomSingleSampleMetric = "metrics.mojom.SingleSampleMetric",
    MetricsMojomSingleSampleMetricsProvider = "metrics.mojom.SingleSampleMetricsProvider",
    NetworkHintsMojomNetworkHintsHandler = "network_hints.mojom.NetworkHintsHandler",
    NetworkMojomAcceptCHFrameObserver = "network.mojom.AcceptCHFrameObserver",
    NetworkMojomCookieAccessObserver = "network.mojom.CookieAccessObserver",
    NetworkMojomCookieChangeListener = "network.mojom.CookieChangeListener",
    NetworkMojomCookieManager = "network.mojom.CookieManager",
    NetworkMojomCrossOriginEmbedderPolicyReporter = "network.mojom.CrossOriginEmbedderPolicyReporter",
    NetworkMojomDevToolsObserver = "network.mojom.DevToolsObserver",
    NetworkMojomNetworkContext = "network.mojom.NetworkContext",
    NetworkMojomNetworkQualityEstimatorManagerClient = "network.mojom.NetworkQualityEstimatorManagerClient",
    NetworkMojomNetworkService = "network.mojom.NetworkService",
    NetworkMojomProxyConfigPollerClient = "network.mojom.ProxyConfigPollerClient",
    NetworkMojomProxyLookupClient = "network.mojom.ProxyLookupClient",
    NetworkMojomResolveHostClient = "network.mojom.ResolveHostClient",
    NetworkMojomRestrictedCookieManager = "network.mojom.RestrictedCookieManager",
    NetworkMojomURLLoader = "network.mojom.URLLoader",
    NetworkMojomURLLoaderClient = "network.mojom.URLLoaderClient",
    NetworkMojomURLLoaderFactory = "network.mojom.URLLoaderFactory",
    NetworkMojomURLLoaderNetworkServiceObserver = "network.mojom.URLLoaderNetworkServiceObserver",
    NetworkMojomWebSocket = "network.mojom.WebSocket",
    NetworkMojomWebSocketClient = "network.mojom.WebSocketClient",
    NetworkMojomWebSocketHandshakeClient = "network.mojom.WebSocketHandshakeClient",
    PerformanceManagerMojomDocumentCoordinationUnit = "performance_manager.mojom.DocumentCoordinationUnit",
    PerformanceManagerMojomProcessCoordinationUnit = "performance_manager.mojom.ProcessCoordinationUnit",
    SafeBrowsingMojomSafeBrowsing = "safe_browsing.mojom.SafeBrowsing",
    SafeBrowsingMojomSafeBrowsingURLChecker = "safe_browsing.mojom.SafeBrowsingUrlChecker",
    ServiceManagerMojomInterfaceProvider = "service_manager.mojom.InterfaceProvider",
    StorageMojomQuotaClient = "storage.mojom.QuotaClient",
    StorageMojomServiceWorkerResourceWriter = "storage.mojom.ServiceWorkerResourceWriter",
    StorageMojomServiceWorkerStorageControl = "storage.mojom.ServiceWorkerStorageControl",
    StorageMojomSessionStorageControl = "storage.mojom.SessionStorageControl",
    TracingMojomProducerClient = "tracing.mojom.ProducerClient",
    TracingMojomProducerHost = "tracing.mojom.ProducerHost",
    TracingMojomTracedProcess = "tracing.mojom.TracedProcess",
    TracingMojomTracingSessionClient = "tracing.mojom.TracingSessionClient",
    TranslateMojomContentTranslateDriver = "translate.mojom.ContentTranslateDriver",
    UkmMojomUkmRecorderInterface = "ukm.mojom.UkmRecorderInterface",
    UnknownInterface = "unknown interface",
    VisitedlinkMojomVisitedLinkNotificationSink = "visitedlink.mojom.VisitedLinkNotificationSink",
    VizMojomCompositingModeReporter = "viz.mojom.CompositingModeReporter",
    VizMojomCompositorFrameSink = "viz.mojom.CompositorFrameSink",
    VizMojomCompositorFrameSinkClient = "viz.mojom.CompositorFrameSinkClient",
    VizMojomDisplayClient = "viz.mojom.DisplayClient",
    VizMojomFrameSinkManager = "viz.mojom.FrameSinkManager",
    VizMojomFrameSinkManagerClient = "viz.mojom.FrameSinkManagerClient",
    VizMojomFrameSinkVideoCapturer = "viz.mojom.FrameSinkVideoCapturer",
    VizMojomFrameSinkVideoConsumer = "viz.mojom.FrameSinkVideoConsumer",
    VizMojomGPU = "viz.mojom.Gpu",
    VizMojomGPUHost = "viz.mojom.GpuHost",
    VizMojomGPUMemoryBufferFactory = "viz.mojom.GpuMemoryBufferFactory",
    VizMojomGPUService = "viz.mojom.GpuService",
}

export interface ChromeRasterTask {
    source_frame_number: number;
}

export interface ChromeRendererSchedulerState {
    rail_mode: string;
}

export interface Data {
    frameTreeNodeId?:       number;
    frames?:                FrameElement[];
    persistentIds?:         boolean;
    needsBeginFrame?:       number;
    type?:                  DataType;
    documentLoaderURL?:     string;
    isLoadingMainFrame?:    boolean;
    navigationId?:          string;
    requestId?:             string;
    frameId?:               number;
    renderer_pid?:          number;
    used_bytes?:            number;
    frame?:                 string;
    name?:                  string;
    processId?:             number;
    url?:                   string;
    priority?:              Priority;
    requestMethod?:         RequestMethod;
    encodedDataLength?:     number;
    fromCache?:             boolean;
    fromServiceWorker?:     boolean;
    mimeType?:              MIMEType;
    responseTime?:          number;
    statusCode?:            number;
    timing?:                { [key: string]: number };
    isMainFrame?:           boolean;
    page?:                  string;
    renderBlocking?:        RenderBlocking;
    columnNumber?:          number;
    lineNumber?:            number;
    notStreamedReason?:     NotStreamedReason;
    streamed?:              boolean;
    documents?:             number;
    jsEventListeners?:      number;
    jsHeapSizeUsed?:        number;
    nodes?:                 number;
    decodedBodyLength?:     number;
    didFail?:               boolean;
    finishTime?:            number;
    styleSheetUrl?:         string;
    layerTreeId?:           number;
    clip?:                  number[];
    layerId?:               number;
    nodeId?:                number;
    height?:                number;
    srcHeight?:             number;
    srcWidth?:              number;
    width?:                 number;
    x?:                     number;
    y?:                     number;
    candidateIndex?:        number;
    size?:                  number;
    stackTrace?:            StackTrace[];
    identifier?:            number;
    webSocketProtocol?:     string;
    singleShot?:            boolean;
    timeout?:               number;
    timerId?:               number;
    functionName?:          FunctionName;
    scriptId?:              string;
    id?:                    number | string;
    parent?:                string;
    workerId?:              string;
    workerThreadId?:        number;
    readyState?:            number;
    allottedMilliseconds?:  number;
    timedOut?:              boolean;
    producedCacheSize?:     number;
    startTime?:             number;
    cpuProfile?:            CPUProfile;
    lines?:                 number[];
    timeDeltas?:            number[];
    nodeName?:              string;
    state?:                 DataState;
    compositeFailed?:       number;
    unsupportedProperties?: string[];
}

export interface CPUProfile {
    nodes?:  Node[];
    samples: number[];
}

export interface Node {
    callFrame: StackTrace;
    id:        number;
    parent?:   number;
}

export interface FrameElement {
    frame:     string;
    name:      string;
    processId: number;
    url:       string;
}

export enum FunctionName {
    B = "b",
    ClientOnmessage = "client.onmessage",
    ClientOnopen = "client.onopen",
    DOnerror = "d.onerror",
    DOnloadDOnerror = "d.onload.d.onerror",
    E = "e",
    EOnload = "e.onload",
    Empty = "",
    FcEOnload = "Fc.e.onload",
    FunctionNameK = "k",
    FunctionNameT = "_t",
    K = "K",
    NOnerrorNOnload = "n.onerror.n.onload",
    O = "o",
    R = "r",
    ROnload = "r.onload",
    S = "S",
    T = "t",
    U = "u",
    Ur = "Ur",
    Vs = "vs",
    WPort1Onmessage = "w.port1.onmessage",
    WVtpGtmOnSuccess = "w.vtp_gtmOnSuccess",
    Zt = "Zt",
}

export enum MIMEType {
    ApplicationJSON = "application/json",
    ApplicationJavascript = "application/javascript",
    ApplicationXJavascript = "application/x-javascript",
    Empty = "",
    FontWoff2 = "font/woff2",
    ImageGIF = "image/gif",
    ImagePNG = "image/png",
    ImageWebp = "image/webp",
    ImageXIcon = "image/x-icon",
    TextCSS = "text/css",
    TextHTML = "text/html",
    TextJavascript = "text/javascript",
    TextPlain = "text/plain",
}

export enum NotStreamedReason {
    AlreadyUsedStreamedData = "already used streamed data",
    InlineScript = "inline script",
    WorkerTopLevelScriptsAreNotStreamable = "worker top-level scripts are not streamable",
}

export enum Priority {
    High = "High",
    Low = "Low",
    Medium = "Medium",
    VeryHigh = "VeryHigh",
    VeryLow = "VeryLow",
}

export enum RenderBlocking {
    Blocking = "blocking",
    DynamicallyInjectedNonBlocking = "dynamically_injected_non_blocking",
    NonBlocking = "non_blocking",
}

export enum RequestMethod {
    Get = "GET",
    Post = "POST",
}

export enum DataState {
    Running = "running",
}

export enum DataType {
    Animationiteration = "animationiteration",
    Animationstart = "animationstart",
    AutosizeResized = "autosize:resized",
    Beforeunload = "beforeunload",
    DOMContentLoaded = "DOMContentLoaded",
    Error = "error",
    Image = "image",
    Load = "load",
    Pagehide = "pagehide",
    Pageshow = "pageshow",
    Readystatechange = "readystatechange",
    Text = "text",
    Transitionend = "transitionend",
    UetEvent = "UetEvent",
    Unload = "unload",
    Visibilitychange = "visibilitychange",
    Webkitvisibilitychange = "webkitvisibilitychange",
}

export interface EndData {
    endLine?:     number;
    layoutRoots?: LayoutRoot[];
    nodeId?:      number;
    nodeName?:    NodeName;
    rectilinear?: boolean;
    x?:           number;
    y?:           number;
    move?:        boolean;
    state?:       EndDataState;
}

export interface LayoutRoot {
    depth:  number;
    nodeId: number;
    quads:  Array<number[]>;
}

export enum NodeName {
    DIVClassSc1Hlrwkj0IiaJSQ = "DIV class='sc-1hlrwkj-0 iiaJSQ'",
}

export enum EndDataState {
    Finished = "finished",
    Idle = "idle",
}

export enum ArgsState {
    Hidden = "hidden",
    Normal = "normal",
    RendererForegrounded = "renderer_foregrounded",
    Silent = "silent",
    Visible = "visible",
}

export interface TileData {
    layerId:           number;
    sourceFrameNumber: number;
    tileId:            TileID;
    tileResolution:    TileResolution;
}

export interface TileID {
    id_ref: string;
}

export enum TileResolution {
    HighResolution = "HIGH_RESOLUTION",
}

export enum ArgsType {
    AllocationFailure = "allocation failure",
    FinalizeIncrementalMarkingViaTask = "finalize incremental marking via task",
    IncrementalFinalizationStep = "incremental finalization step",
    InvokeWeakPhantomCallbacks = "invoke weak phantom callbacks",
    Task = "task",
}

export enum Cat {
    BenchmarkLatencyInfoRail = "benchmark,latencyInfo,rail",
    BlinkAnimationsDevtoolsTimelineBenchmarkRail = "blink.animations,devtools.timeline,benchmark,rail",
    BlinkDevtoolsTimeline = "blink,devtools.timeline",
    BlinkUserTiming = "blink.user_timing",
    BlinkUserTimingRail = "blink.user_timing,rail",
    CcBenchmarkDisabledByDefaultDevtoolsTimelineFrame = "cc,benchmark,disabled-by-default-devtools.timeline.frame",
    CcDisabledByDefaultDevtoolsTimeline = "cc,disabled-by-default-devtools.timeline",
    DevtoolsTimeline = "devtools.timeline",
    DevtoolsTimelineDisabledByDefaultV8Gc = "devtools.timeline,disabled-by-default-v8.gc",
    DevtoolsTimelineRail = "devtools.timeline,rail",
    DevtoolsTimelineV8 = "devtools.timeline,v8",
    DisabledByDefaultDevtoolsScreenshot = "disabled-by-default-devtools.screenshot",
    DisabledByDefaultDevtoolsTimeline = "disabled-by-default-devtools.timeline",
    DisabledByDefaultDevtoolsTimelineFrame = "disabled-by-default-devtools.timeline.frame",
    DisabledByDefaultV8CPUProfiler = "disabled-by-default-v8.cpu_profiler",
    IPCToplevel = "ipc,toplevel",
    InputBenchmarkDevtoolsTimeline = "input,benchmark,devtools.timeline",
    LoadingRailDevtoolsTimeline = "loading,rail,devtools.timeline",
    Metadata = "__metadata",
    Toplevel = "toplevel",
    ToplevelRendererMainSTARTMSGLOOP = "toplevel:RendererMain.START_MSG_LOOP",
    V8DevtoolsTimeline = "v8,devtools.timeline",
    V8DevtoolsTimelineDisabledByDefaultV8Compile = "v8,devtools.timeline,disabled-by-default-v8.compile",
    V8Execute = "v8.execute",
}

export interface Id2 {
    local: string;
}

export enum Name {
    ANGLEPlatformImplRunWorkerTask = "ANGLEPlatformImpl::RunWorkerTask",
    ActivateLayerTree = "ActivateLayerTree",
    Activation = "Activation",
    AfterHydrate = "afterHydrate",
    Animation = "Animation",
    BeforeRender = "beforeRender",
    BeginFrame = "BeginFrame",
    BeginImplFrameToSendBeginMainFrame = "BeginImplFrameToSendBeginMainFrame",
    BeginMainThreadFrame = "BeginMainThreadFrame",
    BrowserCRApplicationSendEvent = "BrowserCrApplication::sendEvent",
    CancelIdleCallback = "CancelIdleCallback",
    ChannelMojoOnMessageReceived = "ChannelMojo::OnMessageReceived",
    Commit = "Commit",
    CommitLoad = "CommitLoad",
    CommitNavigationEnd = "commitNavigationEnd",
    CompositeLayers = "CompositeLayers",
    ConnectorDispatchMessage = "Connector::DispatchMessage",
    DOMComplete = "domComplete",
    DOMContentLoadedEventEnd = "domContentLoadedEventEnd",
    DOMContentLoadedEventStart = "domContentLoadedEventStart",
    DOMInteractive = "domInteractive",
    DOMLoading = "domLoading",
    DecodeImage = "Decode Image",
    DecodeLazyPixelRef = "Decode LazyPixelRef",
    DrawFrame = "DrawFrame",
    DrawLazyPixelRef = "Draw LazyPixelRef",
    DroppedFrame = "DroppedFrame",
    EndActivateToSubmitCompositorFrame = "EndActivateToSubmitCompositorFrame",
    EndCommitToActivation = "EndCommitToActivation",
    EvaluateScript = "EvaluateScript",
    EventDispatch = "EventDispatch",
    FetchStart = "fetchStart",
    FireIdleCallback = "FireIdleCallback",
    FirstContentfulPaint = "firstContentfulPaint",
    FirstImagePaint = "firstImagePaint",
    FirstMeaningfulPaint = "firstMeaningfulPaint",
    FirstMeaningfulPaintCandidate = "firstMeaningfulPaintCandidate",
    FirstPaint = "firstPaint",
    FrameCommittedInBrowser = "FrameCommittedInBrowser",
    FrameDeletedInBrowser = "FrameDeletedInBrowser",
    FrameStartedLoading = "FrameStartedLoading",
    FunctionCall = "FunctionCall",
    GPUTask = "GPUTask",
    HitTest = "HitTest",
    ImageDecodeTask = "ImageDecodeTask",
    ImageUploadTask = "ImageUploadTask",
    InputLatencyMouseMove = "InputLatency::MouseMove",
    IntersectionObserverControllerComputeIntersections = "IntersectionObserverController::computeIntersections",
    InvalidateLayout = "InvalidateLayout",
    KeyWindow = "KeyWindow",
    LargestContentfulPaintCandidate = "largestContentfulPaint::Candidate",
    LatencyInfoFlow = "LatencyInfo.Flow",
    LayerID = "layerId",
    Layout = "Layout",
    LoadEventEnd = "loadEventEnd",
    LoadEventStart = "loadEventStart",
    MajorGC = "MajorGC",
    MarkDOMContent = "MarkDOMContent",
    MarkLoad = "MarkLoad",
    MinorGC = "MinorGC",
    NavigationStart = "navigationStart",
    NeedsBeginFrameChanged = "NeedsBeginFrameChanged",
    NextJSBeforeHydration = "Next.js-before-hydration",
    NextJSHydration = "Next.js-hydration",
    NumCpus = "num_cpus",
    Paint = "Paint",
    PaintImage = "PaintImage",
    ParseAuthorStyleSheet = "ParseAuthorStyleSheet",
    ParseHTML = "ParseHTML",
    PipelineReporter = "PipelineReporter",
    PreloadRenderBlockingStatusChange = "PreloadRenderBlockingStatusChange",
    ProcessLabels = "process_labels",
    ProcessName = "process_name",
    ProcessSortIndex = "process_sort_index",
    ProcessUptimeSeconds = "process_uptime_seconds",
    Profile = "Profile",
    ProfileChunk = "ProfileChunk",
    RasterTask = "RasterTask",
    ReceiveCompositorFrameToStartDraw = "ReceiveCompositorFrameToStartDraw",
    RedirectEnd = "redirectEnd",
    RedirectStart = "redirectStart",
    RendererAudioState = "RendererAudioState",
    RendererMainSTARTMSGLOOP = "RendererMain.START_MSG_LOOP",
    RendererPriority = "RendererPriority",
    RendererProcessType = "RendererProcessType",
    RendererVisibility = "RendererVisibility",
    RequestIdleCallback = "RequestIdleCallback",
    RequestMainThreadFrame = "RequestMainThreadFrame",
    ResourceChangePriority = "ResourceChangePriority",
    ResourceFinish = "ResourceFinish",
    ResourceMarkAsCached = "ResourceMarkAsCached",
    ResourceReceiveResponse = "ResourceReceiveResponse",
    ResourceReceivedData = "ResourceReceivedData",
    ResourceSendRequest = "ResourceSendRequest",
    ResourceWillSendRequest = "ResourceWillSendRequest",
    ResponseEnd = "responseEnd",
    RunMicrotasks = "RunMicrotasks",
    RunTask = "RunTask",
    ScheduleStyleRecalculation = "ScheduleStyleRecalculation",
    SchedulerRAILMode = "Scheduler.RAILMode",
    Screenshot = "Screenshot",
    SendBeginMainFrameToCommit = "SendBeginMainFrameToCommit",
    SetLayerTreeID = "SetLayerTreeId",
    SimpleWatcherOnHandleReady = "SimpleWatcher::OnHandleReady",
    SingleThreadTaskGraphRunnerRunTaskWithLockAcquired = "SingleThreadTaskGraphRunner::RunTaskWithLockAcquired",
    StartDrawToSwapStart = "StartDrawToSwapStart",
    SubmitCompositorFrameToPresentationCompositorFrame = "SubmitCompositorFrameToPresentationCompositorFrame",
    SubmitToReceiveCompositorFrame = "SubmitToReceiveCompositorFrame",
    Swap = "Swap",
    TaskGraphRunnerRunTask = "TaskGraphRunner::RunTask",
    ThreadControllerImplRunTask = "ThreadControllerImpl::RunTask",
    ThreadName = "thread_name",
    ThreadPoolRunTask = "ThreadPool_RunTask",
    ThreadSortIndex = "thread_sort_index",
    TimerFire = "TimerFire",
    TimerInstall = "TimerInstall",
    TimerRemove = "TimerRemove",
    TracingSessionIDForWorker = "TracingSessionIdForWorker",
    TracingStartedInBrowser = "TracingStartedInBrowser",
    TrackerValidation = "TrackerValidation",
    UnloadEventEnd = "unloadEventEnd",
    UnloadEventStart = "unloadEventStart",
    UpdateCounters = "UpdateCounters",
    UpdateLayer = "UpdateLayer",
    UpdateLayerTree = "UpdateLayerTree",
    UpdateLayoutTree = "UpdateLayoutTree",
    V8BytecodeBudgetInterrupt = "V8.BytecodeBudgetInterrupt",
    V8BytecodeBudgetInterruptWithStackCheck = "V8.BytecodeBudgetInterruptWithStackCheck",
    V8Compile = "v8.compile",
    V8GcBackgroundFullArrayBufferSweep = "V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP",
    V8GcBackgroundSafepoint = "V8.GC_BACKGROUND_SAFEPOINT",
    V8GcBackgroundUnpark = "V8.GC_BACKGROUND_UNPARK",
    V8GcBackgroundYoungArrayBufferSweep = "V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP",
    V8GcHeapEmbedderTracingEpilogue = "V8.GC_HEAP_EMBEDDER_TRACING_EPILOGUE",
    V8GcHeapEpilogue = "V8.GC_HEAP_EPILOGUE",
    V8GcHeapEpilogueReduceNewSpace = "V8.GC_HEAP_EPILOGUE_REDUCE_NEW_SPACE",
    V8GcHeapEpilogueSafepoint = "V8.GC_HEAP_EPILOGUE_SAFEPOINT",
    V8GcHeapExternalEpilogue = "V8.GC_HEAP_EXTERNAL_EPILOGUE",
    V8GcHeapExternalPrologue = "V8.GC_HEAP_EXTERNAL_PROLOGUE",
    V8GcHeapExternalWeakGlobalHandles = "V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES",
    V8GcHeapPrologue = "V8.GC_HEAP_PROLOGUE",
    V8GcHeapPrologueSafepoint = "V8.GC_HEAP_PROLOGUE_SAFEPOINT",
    V8GcMarkCompactor = "V8.GC_MARK_COMPACTOR",
    V8GcMcBackgroundEvacuateCopy = "V8.GC_MC_BACKGROUND_EVACUATE_COPY",
    V8GcMcBackgroundEvacuateUpdatePointers = "V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS",
    V8GcMcBackgroundMarking = "V8.GC_MC_BACKGROUND_MARKING",
    V8GcMcBackgroundSweeping = "V8.GC_MC_BACKGROUND_SWEEPING",
    V8GcMcClear = "V8.GC_MC_CLEAR",
    V8GcMcClearFlushableBytecode = "V8.GC_MC_CLEAR_FLUSHABLE_BYTECODE",
    V8GcMcClearFlushedJSFunctions = "V8.GC_MC_CLEAR_FLUSHED_JS_FUNCTIONS",
    V8GcMcClearMaps = "V8.GC_MC_CLEAR_MAPS",
    V8GcMcClearStringTable = "V8.GC_MC_CLEAR_STRING_TABLE",
    V8GcMcClearWeakCollections = "V8.GC_MC_CLEAR_WEAK_COLLECTIONS",
    V8GcMcClearWeakLists = "V8.GC_MC_CLEAR_WEAK_LISTS",
    V8GcMcClearWeakReferences = "V8.GC_MC_CLEAR_WEAK_REFERENCES",
    V8GcMcCompleteSweepArrayBuffers = "V8.GC_MC_COMPLETE_SWEEP_ARRAY_BUFFERS",
    V8GcMcCompleteSweeping = "V8.GC_MC_COMPLETE_SWEEPING",
    V8GcMcEpilogue = "V8.GC_MC_EPILOGUE",
    V8GcMcEvacuate = "V8.GC_MC_EVACUATE",
    V8GcMcEvacuateCleanUp = "V8.GC_MC_EVACUATE_CLEAN_UP",
    V8GcMcEvacuateCopy = "V8.GC_MC_EVACUATE_COPY",
    V8GcMcEvacuateCopyParallel = "V8.GC_MC_EVACUATE_COPY_PARALLEL",
    V8GcMcEvacuateEpilogue = "V8.GC_MC_EVACUATE_EPILOGUE",
    V8GcMcEvacuatePrologue = "V8.GC_MC_EVACUATE_PROLOGUE",
    V8GcMcEvacuateRebalance = "V8.GC_MC_EVACUATE_REBALANCE",
    V8GcMcEvacuateUpdatePointers = "V8.GC_MC_EVACUATE_UPDATE_POINTERS",
    V8GcMcEvacuateUpdatePointersParallel = "V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL",
    V8GcMcEvacuateUpdatePointersSlotsMain = "V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN",
    V8GcMcEvacuateUpdatePointersToNewRoots = "V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS",
    V8GcMcEvacuateUpdatePointersWeak = "V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK",
    V8GcMcFinish = "V8.GC_MC_FINISH",
    V8GcMcFinishSweepArrayBuffers = "V8.GC_MC_FINISH_SWEEP_ARRAY_BUFFERS",
    V8GcMcIncremental = "V8.GC_MC_INCREMENTAL",
    V8GcMcIncrementalEmbedderPrologue = "V8.GC_MC_INCREMENTAL_EMBEDDER_PROLOGUE",
    V8GcMcIncrementalEmbedderTracing = "V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING",
    V8GcMcIncrementalExternalEpilogue = "V8.GC_MC_INCREMENTAL_EXTERNAL_EPILOGUE",
    V8GcMcIncrementalExternalPrologue = "V8.GC_MC_INCREMENTAL_EXTERNAL_PROLOGUE",
    V8GcMcIncrementalFinalize = "V8.GC_MC_INCREMENTAL_FINALIZE",
    V8GcMcIncrementalFinalizeBody = "V8.GC_MC_INCREMENTAL_FINALIZE_BODY",
    V8GcMcIncrementalStart = "V8.GC_MC_INCREMENTAL_START",
    V8GcMcMark = "V8.GC_MC_MARK",
    V8GcMcMarkEmbedderTracing = "V8.GC_MC_MARK_EMBEDDER_TRACING",
    V8GcMcMarkEmbedderTracingClosure = "V8.GC_MC_MARK_EMBEDDER_TRACING_CLOSURE",
    V8GcMcMarkFinishIncremental = "V8.GC_MC_MARK_FINISH_INCREMENTAL",
    V8GcMcMarkMain = "V8.GC_MC_MARK_MAIN",
    V8GcMcMarkRoots = "V8.GC_MC_MARK_ROOTS",
    V8GcMcMarkWeakClosure = "V8.GC_MC_MARK_WEAK_CLOSURE",
    V8GcMcMarkWeakClosureEphemeron = "V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON",
    V8GcMcMarkWeakClosureEphemeronMarking = "V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING",
    V8GcMcMarkWeakClosureHarmony = "V8.GC_MC_MARK_WEAK_CLOSURE_HARMONY",
    V8GcMcMarkWeakClosureWeakHandles = "V8.GC_MC_MARK_WEAK_CLOSURE_WEAK_HANDLES",
    V8GcMcMarkWeakClosureWeakRoots = "V8.GC_MC_MARK_WEAK_CLOSURE_WEAK_ROOTS",
    V8GcMcPrologue = "V8.GC_MC_PROLOGUE",
    V8GcMcSweep = "V8.GC_MC_SWEEP",
    V8GcScavenger = "V8.GC_SCAVENGER",
    V8GcScavengerBackgroundScavengeParallel = "V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL",
    V8GcScavengerCompleteSweepArrayBuffers = "V8.GC_SCAVENGER_COMPLETE_SWEEP_ARRAY_BUFFERS",
    V8GcScavengerFreeRememberedSet = "V8.GC_SCAVENGER_FREE_REMEMBERED_SET",
    V8GcScavengerScavenge = "V8.GC_SCAVENGER_SCAVENGE",
    V8GcScavengerScavengeFinalize = "V8.GC_SCAVENGER_SCAVENGE_FINALIZE",
    V8GcScavengerScavengeParallel = "V8.GC_SCAVENGER_SCAVENGE_PARALLEL",
    V8GcScavengerScavengeRoots = "V8.GC_SCAVENGER_SCAVENGE_ROOTS",
    V8GcScavengerScavengeUpdateRefs = "V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS",
    V8GcScavengerScavengeWeakGlobalHandlesIdentify = "V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY",
    V8GcScavengerScavengeWeakGlobalHandlesProcess = "V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS",
    V8GcScavengerSweepArrayBuffers = "V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS",
    V8GcTimeToSafepoint = "V8.GC_TIME_TO_SAFEPOINT",
    V8HandleInterrupts = "V8.HandleInterrupts",
    V8InvokeAPIInterruptCallbacks = "V8.InvokeApiInterruptCallbacks",
    V8ParseOnBackground = "v8.parseOnBackground",
    V8ParseOnBackgroundParsing = "v8.parseOnBackgroundParsing",
    V8ParseOnBackgroundWaiting = "v8.parseOnBackgroundWaiting",
    V8ProduceCache = "v8.produceCache",
    V8StackGuard = "V8.StackGuard",
    WebSocketCreate = "WebSocketCreate",
    WebSocketReceiveHandshakeResponse = "WebSocketReceiveHandshakeResponse",
    WebSocketSendHandshakeRequest = "WebSocketSendHandshakeRequest",
    XHRLoad = "XHRLoad",
    XHRReadyStateChange = "XHRReadyStateChange",
}

export enum Ph {
    B = "B",
    D = "D",
    E = "e",
    I = "I",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    PhB = "b",
    PhN = "n",
    R = "R",
    X = "X",
}

export enum S {
    P = "p",
    T = "t",
}


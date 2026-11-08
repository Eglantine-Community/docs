
## Frame dump

`src/video_core/renderer_vulkan/vk_frame_dump.cpp` reads back one whole frame: the color targets of
every pass, the storage images written by every compute dispatch and the presented image, as
`.raw.zst` plus PNG previews (float targets encoded to sRGB, NaN and Inf in magenta) and a
`manifest.jsonl` with draw and dispatch indices, shader hashes, formats, sizes, GPU addresses and
per-channel min/max/mean/NaN/Inf. Readbacks are encoded and written on a worker thread; staging is
drained every 256 MiB and a capture stops at 2 GiB (`"truncated": true` in the summary).

- From startup: `EDEN_NX2_FRAME_DUMP=<dir>` with `EDEN_NX2_FRAME_DUMP_AT=<seconds>` (default 60),
  `<frame>f`, or `file` (captures once `<dir>/capture.now` exists, checked every 30 frames, so a
  frame can be picked while playing). `EDEN_NX2_FRAME_DUMP_SAMPLED=1` adds every texture a pass
  samples (3D and depth included, once per pass) and each compute shader samples before its first
  dispatch, with the sampler state and raw TSC words (`kind: sampled`, stage 5 = compute), plus the
  bound buffers below.
- At runtime: `capture_frame`, where `sampled` and `buffers` are separate options.
- Bound buffers: the uniform and storage buffers of every draw and dispatch, once per shader and
  binding (`kind: buffer`, with stage, binding, GPU address and size; bytes deduplicated in
  `buffer_<hash>.bin.zst`, copied on the GPU when the GPU wrote the range), and each dispatch's
  group counts (`kind: launch`).
- Every list of shader hashes (`"shaders"`) has the native program keys of those shaders next to it
  (`"keys"`, same order, `""` where the shader is not a native program or its key is unknown);
  buffer entries have `"shader"` and `"key"`.
- `py -I tools/nx2/frame_dump_index.py <dir>` builds an `index.html` contact sheet. Find the first
  pass whose output is wrong, then look at its shaders.

A runtime capture uses up an `EDEN_NX2_FRAME_DUMP_AT` capture that has not fired yet: they share
one `FrameDump`. Vulkan only.

## Rejecting programs from startup

`EDEN_NX2_REJECT_HASH=<hash>,...` rejects native programs by native program key (shader dump file
names, `diag-state.json` `key`) or shader hash (frame dump `shaders`, `diag-state.json` `hash`),
which stay the same between runs, unlike the addresses `EDEN_NX2_REJECT` takes. The log shows
`rejected by EDEN_NX2_REJECT_HASH` per program. Bisect by halving the list, or with
`reject_shaders` without relaunching. The key covers the captured code, so recompute it when the
capture rules change.

## Limits

- Vulkan only for `capture_frame`, `reject_shaders` and `read_gpu_memory`: the drain point is in
  `RasterizerVulkan::TickFrame`.
- One request at a time. A second client waits while a capture runs.
- `status` fps, `input` and `input_sequence` count Switch 2 presents (`g_nx2_present_count`).
- Not implemented (later phases in Lichii's design notes): pause, resume and frame stepping, a
  shader inventory, live switches, single texture or buffer dumps, per-pass GPU timings. The core
  cannot save state.

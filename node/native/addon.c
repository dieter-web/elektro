#include <node_api.h>
#include <dlfcn.h>
#include <stdio.h>

typedef int (*hs_add_fn)(int, int);

static hs_add_fn hs_add = NULL;

napi_value JsHsAdd(napi_env env, napi_callback_info info) {
	size_t argc = 2;
	napi_value args[2];
	napi_get_cb_info(env, info, &argc, args, NULL, NULL);

	int32_t x, y;
	napi_get_value_int32(env, args[0], &x);
	napi_get_value_int32(env, args[1], &y);

	int result = hs_add(x,y);

	napi_value jsResult;
	napi_create_int32(env, result, &jsResult);
	return jsResult;
}

napi_value Init(napi_env env, napi_value exports) {
	void* handle = dlopen("./libmylib_ffi.so", RTLD_LAZY);
	if(!handle) {
		napi_throw_error(env, NULL, "Could not load libmylib_ffi.so");
		return NULL;
	}

	hs_add = (hs_add_fn)dlsym(handle,"hs_add");
	if(!hs_add) {
		napi_throw_error(env, NULL, "Could not load symbol hs_add");
		return NULL;
	}

	napi_value fn;
	napi_create_function(env, NULL, 0, JsHsAdd, NULL, &fn);
	napi_set_named_property(env, exports, "hs_add", fn);
	return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)


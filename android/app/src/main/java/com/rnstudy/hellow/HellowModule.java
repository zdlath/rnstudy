package com.rnstudy.hellow;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class HellowModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    HellowModule(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @Override
    public String getName() {
      return "HellowModule";
    }

    @ReactMethod
    public void getGreeting(Callback callback) {
        callback.invoke("Hi! I'm Android");
    }
}
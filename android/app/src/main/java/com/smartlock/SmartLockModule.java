package com.smartlock;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class SmartLockModule extends ReactContextBaseJavaModule {
    private  static ReactApplicationContext reactContext;
    public static final String REACT_CLASS = "SmartLock";

    SmartLockModule (ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }
}
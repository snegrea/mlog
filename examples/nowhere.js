// The MIT License (MIT)
// Copyright (c) 2014 Stefan Negrea
//
// Use of this source code is governed by a MIT license that can be 
// found in the LICENSE file.

var logger = require('../lib/logger');


var logConfiguration = {
  "level": "INFO",
  "loggers": {
    "null": {
    }
  }
};

var log = new logger(logConfiguration);

log.info('Test info log to null. It will not show up anywhere.');
log.error('Test error log with stack trace. It will show up anywhere.');
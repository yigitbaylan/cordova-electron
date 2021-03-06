/*
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

const path = require('path');
const rewire = require('rewire');

const rootDir = path.resolve(__dirname, '../../../..');

const update = rewire(path.join(rootDir, 'lib/update'));

describe('Update', () => {
    describe('run export method', () => {
        it('should reject with an errror that update is not supported.', () => {
            update.run().then(
                () => {},
                error => {
                    expect(error).toEqual(new Error('Update not supported'));
                }
            );
        });
    });

    describe('help export method', () => {
        it('should warn that updating is not support for Electron.', () => {
            spyOn(console, 'log');
            update.help();
            expect(console.log).toHaveBeenCalledWith('WARNING : Electron does not support updating. Remove and then re-Add the platform to get the latest.');
        });
    });
});

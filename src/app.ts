/**
 * This file simply passes along your bot source and metadata to
 * leftovers-again. No edits necessary.
 */
import * as LeftoversAgain from 'leftovers-again';
import * as DeepIndigo from './bot';
import * as metadata from '../package.json';
export class X {}
LeftoversAgain.start(metadata, new DeepIndigo.DeepIndigo());

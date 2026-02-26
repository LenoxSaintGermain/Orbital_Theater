/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Scene {
  id: string;
  videoUrl: string;
  title: string;
  description: string; // The prompt or narrative text
  type: 'canon' | 'fork' | 'remix';
  branchId?: string;
}

export interface Story {
  id: string;
  title: string;
  tagline: string;
  author: string;
  scenes: Scene[];
  coverUrl: string; // Usually the first scene's video or a thumbnail
  tags: string[];
}

// Legacy support for existing components until fully refactored
export interface Video extends Scene {}

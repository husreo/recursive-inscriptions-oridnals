# Guide

This is html ordinals structure.

`/content/` contains inscriptions that needs to be referenced by our inscriptions. References to this folder need to eventually be replaced with references containing inscription IDs. E.g. `/content/bg-1.png` could become `/content/[inscription-id]`.

Note: that I no metadata handling has been done in this repository. If we need to attach metadata to traits or final ordinals, we best move them into a JSON object that can contain the metadata, too. 

Note 2: I have not dealt with exclusions of particular trait combinations. We're generating all permutations possible of all traits. 

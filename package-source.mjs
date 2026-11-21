import { existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
// Package the exact tracked source revision; no dependencies or credentials enter it.
if (existsSync('.git')) {
  mkdirSync('out/downloads', { recursive: true });
  execFileSync('git', ['archive', '--format=zip', '--prefix=sunil-portfolio/', '-o', path.resolve('out/downloads/sunil-portfolio-source.zip'), 'HEAD']);
  process.stdout.write('Source archive created from the current Git revision.\n');
}

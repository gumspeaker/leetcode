function minPartitions(n: string): number {
  return Math.max(...Array.from(n).map(Number));
}

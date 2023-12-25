export function fibonacci(n: number): number[] {
  const sequence: number[] = []

  let a = 0
  let b = 1

  if (n >= 1) {
    sequence.push(a)
  }

  if (n >= 2) {
    sequence.push(b)
  }

  for (let i = 2; i < n; i++) {
    const next = a + b
    sequence.push(next)
    a = b
    b = next
  }

  return sequence
}

// console.log(fibonacci(8))

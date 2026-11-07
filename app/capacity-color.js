export function getCapacityColor(percent) {
  if (percent <= 50) return 'var(--color-primary)'
  if (percent < 80) return 'var(--color-accent)'
  return 'var(--color-capacity-critical)'
}

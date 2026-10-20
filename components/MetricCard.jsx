import React from 'react'

export default function MetricCard({ title, value, unit, subtext, icon: Icon }) {
  return (
    <article className="metric-card rounded-xl">
      <div className="metric-header">
        <span className="metric-title font-medium text-[14px]">{title}</span>
        {Icon && (
          <div className="metric-icon-badge rounded-xl" aria-hidden="true">
            <Icon size={18} />
          </div>
        )}
      </div>
      <div className="metric-value font-bold text-[32px]">
        {value}
        {unit && (
          <span
            className="font-medium text-[14px]"
            style={{
              color: 'var(--color-text-secondary)',
              marginLeft: '0.35rem',
            }}
          >
            {unit}
          </span>
        )}
      </div>
      {subtext && <span className="metric-sub font-medium text-[13px]">{subtext}</span>}
    </article>
  )
}


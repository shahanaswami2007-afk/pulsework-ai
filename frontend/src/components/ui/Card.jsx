function Card({ children, className = '' }) {
  return <section className={`panel ${className}`}>{children}</section>
}

export default Card

const styles = { 'In progress': 'bg-violet-50 text-violet-700', 'Completed': 'bg-emerald-50 text-emerald-700', 'Review': 'bg-amber-50 text-amber-700', 'To do': 'bg-slate-100 text-slate-600' }
export function Badge({ children }) { return <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${styles[children] || 'bg-slate-100 text-slate-600'}`}>{children}</span> }

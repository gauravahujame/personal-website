/**
 * Project and experiment status. Only set a status when it can be verified;
 * leave it undefined otherwise and no badge is shown.
 */
export type Status = 'completed' | 'active' | 'experimental' | 'concept';

export const STATUS_LABELS: Record<Status, string> = {
  completed: 'Completed',
  active: 'Active',
  experimental: 'Experimental',
  concept: 'Concept'
};

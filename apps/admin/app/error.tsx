'use client';

export default function Error({ error }: { error: Error }) {
  return <p>🚨 Fout: {error.message}</p>;
}
interface Word {
    id: number
    name: string
}

export default function useJobs() {
  const words: Word[] = [];

  return {
    words,
  };
}

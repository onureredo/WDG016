import HeroProfile from './HeroProfile';

function Dynamic() {
  const justiceLeage = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Wonder Woman' },
    { id: 3, name: 'Superman' },
    { id: 4, name: 'The Flash' },
  ];
  return (
    <div>
      {/* {justiceLeage.map((hero) => (
        <h2 key={hero.id}>{hero.name}</h2>
      ))} */}

      {justiceLeage.map((hero) => (
        <HeroProfile key={hero.id} heroName={hero.name} />
      ))}
    </div>
  );
}

export default Dynamic;

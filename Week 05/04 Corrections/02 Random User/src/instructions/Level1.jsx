const Level1 = () => {
  return (
    <>
      <h4>Fetch data</h4>
      <ul>
        <li>
          Go to{' '}
          <a
            href='https://randomuser.me/documentation'
            target='_blank'
            rel='noreferrer norelation'
          >
            Random User API documentation
          </a>{' '}
          and get familiar with the way to retrieve data from it as well as the
          resulting data structure.
        </li>
        <li>
          You have two ready to use components for this exercise: <b>User</b>{' '}
          and <b>Contact</b>, both in the <i>components</i> folder. Take a
          moment to analyze their structure.
        </li>
        <li>
          Using the fetch API, get 10 users from the Random User API and store
          the results from the request in a piece of state, let's call it{' '}
          <code>users</code>. This request should only take place 1 time, so
          you'll need to wrap it in an effect, otherwise we'd stumble upon a
          loop because it'd run on every render (after the state update)
        </li>
        <li>
          Iterate over the users and render one User component per user in that
          array.
        </li>
      </ul>
    </>
  );
};

export default Level1;

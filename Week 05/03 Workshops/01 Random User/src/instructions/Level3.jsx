const Level3 = () => {
  return (
    <>
      <h4>Clean up</h4>
      <p>
        Imagine our component needs to be unmounted before the fetch request is
        finalised. In this instance we need to either ignore the result or abort
        the request so we don't try to update the state variable once the
        component is gone!
      </p>
      <ul>
        <li>
          Refactor your effect to return a clean up function that sends an{' '}
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/API/AbortController'
            target='_blank'
            rel='noreferrer norelation'
          >
            abort signal
          </a>
          . Understand the network request is not aborted or cancelled, but we
          will stop any side effects.
        </li>
      </ul>
    </>
  );
};

export default Level3;

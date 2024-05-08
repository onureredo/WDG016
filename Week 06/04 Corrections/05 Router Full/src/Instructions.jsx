const Instructions = () => {
  return (
    <div className='block'>
      <details>
        <summary>For this exercise, you will have to:</summary>
        <ul>
          <li>
            Install <code>react-router-dom</code>, then wrap your application
            component tree in it (see previous exercises). We will stick to the{' '}
            <a
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://reactrouter.com/en/main/router-components/browser-router'
            >
              Browser Router
            </a>{' '}
            component and we won't be implementing the new data routers as they
            are considered and advanced pattern.
          </li>
          <li>
            Create a component named <code>Students</code> that will display
            information about all the students. You can use the{' '}
            <code>getStudents</code> function from the{' '}
            <code>services/students.js</code> file. It takes a{' '}
            <code>number</code> parameter that represents how many students you
            want, and returns a <code>Promise</code> that resolves to an array
            of students.
          </li>
          <li>
            It should be possible to click on the name of a{' '}
            <b>single student</b> from the list in order to view the info
            regarding that specific student. The URL should be updated
            accordingly to <code>/students/{'<someId>'}</code>.{' '}
            <mark>
              Since we are not using the data routers, your{' '}
              <a
                className='help'
                target='_blank'
                rel='noopener noreferrer'
                href='https://reactrouter.com/en/main/route/route#element'
              >
                Route
              </a>{' '}
              component will only need a <code>path</code> and{' '}
              <code>element</code> properties{' '}
              <span role='img' aria-labelledby='alert'>
                ⚠️
              </span>
            </mark>
            . You can use the <code>getStudent</code> function from{' '}
            <code>services/students.js</code> file. It takes an{' '}
            <code>uuid</code> parameter and returns a <code>Promise</code> that
            resolves to a single student. This might code in handy to retrieve
            the <code>uuid</code> from the URL{' '}
            <span role='img' aria-labelledby='point-right'>
              👉
            </span>
            <a
              className='help'
              target='_blank'
              rel='noopener noreferrer'
              href='https://reactrouter.com/en/main/hooks/use-params'
            >
              useParams
            </a>
          </li>
          <li>
            If the URL matches the path of your all students route, make the
            navigation link color white!
          </li>
          <hr />
          <li>
            <b>BONUS/EXTRA:</b> On the students and results page, I should have
            a "Go back" button. When I click on it, it will alert me "Going back
            to the main page", and change the url back to /. This feature should
            not use a Link or NavLink.
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Instructions;

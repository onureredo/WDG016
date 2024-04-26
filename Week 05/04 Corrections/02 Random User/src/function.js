// useEffect(() => {
//   // Create an AbortController instance
//   const controller = new AbortController();
//   const signal = controller.signal;

//   fetch('https://randomuser.me/api/?results=10', { signal })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       setUsers(data.results);
//     })
//     .catch((error) => {
//       // Only log the error if it's not an abort error
//       if (error.name !== 'AbortError') {
//         console.error(error);
//       }
//     });

//   // Cleanup function to abort the request if the component unmounts
//   return () => {
//     controller.abort();
//   };
// }, []);

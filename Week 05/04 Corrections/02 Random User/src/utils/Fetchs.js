// // FETCH API w Error-Handling
// useEffect(() => {
//   fetch('https://randomuser.me/api/?results=10')
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data);
//       setUsers(data.results);
//     })
//     .catch((error) => console.error(error));
// }, []);

// // AXIOS;
// useEffect(() => {
//   axios
//     .get('https://randomuser.me/api/?results=10')
//     .then((res) => setUsers(res.data.results))
//     .catch((error) => console.error(error));
// }, []);

// //   AXIOS + TRY CATCH
// useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('https://randomuser.me/api/?results=10');
//       setUsers(response.data.results);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   fetchUsers();
// }, []);

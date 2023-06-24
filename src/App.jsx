import UsersList from "./components/UsersList";

const App = () => {
  return (
    <>
      <div className="grid justify-items-center">
        <h1 className=" text-3xl text-gray-800 p-4">Album app</h1>

        <UsersList />
      </div>
    </>
  );
};

export default App;

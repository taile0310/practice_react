import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const DemoFecthDataWithSWR = () => {
  const { data, error } = useSWR("https://reqres.in/api/users", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
};

export default DemoFecthDataWithSWR;

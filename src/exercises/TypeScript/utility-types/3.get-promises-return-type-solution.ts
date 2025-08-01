const fetchingCars = () => {
  return Promise.resolve({
    id: 1,
    name: 'BMW',
    price: '$100000',
    color: 'blue',
  })
}
type FetchingCars = Awaited<ReturnType<typeof fetchingCars>>
/* Expected
type FetchingCars = {
  id: number;
  name: string;
  price: string;
  color: string;
}*/
export {}

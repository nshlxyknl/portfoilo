interface ITest{
    title: string;
    description: string
}

const Test = ({title,description}:ITest) => {
  return (
    <div>{title}</div>
  )
}

export default Test
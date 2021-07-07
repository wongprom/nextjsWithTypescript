interface Props {
  title: string;
}

const Header = (props: Props) => {
  return (
    <div>
      <h1 className="">{props.title}</h1>
    </div>
  );
};

export default Header;

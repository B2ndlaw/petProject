type HomePageTypeProps = {
  text: string;
};

export const HomePage = (props: HomePageTypeProps) => {
  return (
    <div>
      <div>
        <img alt="bg1" />
        <img alt="bg2" />
      </div>
      <span>{props.text}</span>
      <p>descriptionWorld</p>
      <p>descriptionButton</p>
      <button>button</button>
      <button>button</button>
    </div>
  );
};

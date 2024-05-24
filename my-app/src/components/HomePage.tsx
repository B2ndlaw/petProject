

type HomePageTypeProps = {
    text: string
    }

export const HomePage = (props:HomePageTypeProps) => {
    return (
      <div>{props.text}</div>
    )
    } 


import { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames';

export type TopicButtonProps = {
  topicName: string;
  onClick?: (topicName: string) => void;
}

export const TopicButton: React.FC<TopicButtonProps> = (props) => {

  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cleanedSvgName = props.topicName
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLocaleLowerCase();

      const topicSvgIcon = await import(`./${cleanedSvgName}.svg`);
      setIcon(topicSvgIcon.default);
    };
    fetchData();
  }, [props.topicName]);

  const onClickHandler = () => {
    if (props.onClick) {
      props.onClick(props.topicName);
    } else {
      console.warn(
        `no click handler defined on topic button with topic ${props.topicName}`
      );
    }
  };

  return (
    <div
      className={classNames(
        "bg-white pl-4 rounded-lg shadow flex max-w-md min-w-max hover:shadow-md transition-shadow"
        )}
      onClick={onClickHandler}
    >
      <img src={icon} alt="" className="w-20" />
      <div className="p-5">
        <h2 className="font-bold text-4xl">{props.topicName}</h2>
      </div>
    </div>
  );
}

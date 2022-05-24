import DeviceItem from "./DeviceItem";

const DeviceLists = ({ devices, title, remove, update }) => {


  return (
    <div>
      <div className="title">{title}</div>
      {devices.map((device, index) => (
        <DeviceItem
          key={index}
          device={device}
          remove={remove}
          update={update}
        />
      ))}
    </div>
  );
};

export default DeviceLists;

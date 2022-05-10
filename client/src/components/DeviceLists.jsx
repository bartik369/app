import DeviceItem from "./DeviceItem";

const DeviceLists = ({ devices, title, remove, update }) => {


  return (
    <div>
      <div className="title">{title}</div>
      {devices.map((device, index) => (
        <DeviceItem
          key={device.id}
          device={device}
          number={index + 1}
          remove={remove}
          update={update}
        />
      ))}
    </div>
  );
};

export default DeviceLists;

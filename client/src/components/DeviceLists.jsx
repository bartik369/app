import DeviceItem from "./DeviceItem";

const DeviceLists = ({ devices, title, remove, update, loading  }) => {

  if (loading) {
    return <h2>Загрузка...</h2>
  }

  return (
    <div className="content-wrapper">
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

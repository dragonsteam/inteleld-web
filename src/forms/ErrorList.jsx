export default function ErrorList({ errors }) {
  return (
    <>
      {Object.keys(errors).map((key) => {
        return (
          <div key={key}>
            <p style={{ color: 'red' }}>{key}:</p>
            <ul style={{ color: 'red' }}>
              {errors[key].map((msg, index) => {
                return <li key={index}>{msg}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

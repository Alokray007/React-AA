import "./BaseStats.css";

function BaseStats(props) {
  const { hp, attack, defense, speed } = props.stats;
  const click = props.clicker;

  return (
    <div className="base-stats">
      <button
        className="sp-stats"
        onClick={click}
        style={{ cursor: "pointer" }}
      >
        Check Special Stats
      </button>
      <h1>BaseStats</h1>
      <table>
        <tbody>
          <tr>
            <td>Hit Points</td>
            <td>{hp}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{attack}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{defense}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BaseStats;

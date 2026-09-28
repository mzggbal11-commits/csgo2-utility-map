import { useMemo, useState } from 'react';
import { mapMeta, utilityPoints, utilityTypes } from './data/maps';

function App() {
  const [selectedMap, setSelectedMap] = useState('dust2');
  const [selectedType, setSelectedType] = useState<string>('全部');
  const [search, setSearch] = useState('');

  const filteredPoints = useMemo(() => {
    return utilityPoints.filter((point) => {
      const matchMap = point.map.toLowerCase() === selectedMap.toLowerCase() || selectedMap === 'all';
      const matchType = selectedType === '全部' || point.type === selectedType;
      const keyword = search.trim().toLowerCase();
      const matchSearch =
        keyword.length === 0 ||
        point.name.toLowerCase().includes(keyword) ||
        point.area.toLowerCase().includes(keyword) ||
        point.tags.some((tag) => tag.toLowerCase().includes(keyword));

      return matchMap && matchType && matchSearch;
    });
  }, [search, selectedMap, selectedType]);

  const activeMap = mapMeta.find((map) => map.id === selectedMap) ?? mapMeta[0];
  const selectedPoint = filteredPoints[0] ?? utilityPoints[0];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">CS:GO2 · 全地图道具教学</p>
          <h1>Utility Map Trainer</h1>
        </div>
        <div className="badge">地图库：{mapMeta.length}</div>
      </header>

      <section className="toolbar">
        <div className="search-box">
          <span>🔎</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="搜索点位、区域、标签"
            aria-label="搜索道具点位"
          />
        </div>
        <div className="type-filter">
          <button className={selectedType === '全部' ? 'active' : ''} onClick={() => setSelectedType('全部')}>
            全部
          </button>
          {utilityTypes.map((type) => (
            <button
              key={type}
              className={selectedType === type ? 'active' : ''}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <main className="content-grid">
        <aside className="map-panel">
          <h2>地图选择</h2>
          <div className="map-list">
            <button
              className={selectedMap === 'all' ? 'map-item active' : 'map-item'}
              onClick={() => setSelectedMap('all')}
            >
              <div>
                <strong>全部地图</strong>
                <small>{utilityPoints.length} 个点位</small>
              </div>
              <span>↗</span>
            </button>

            {mapMeta.map((map) => {
              const count = utilityPoints.filter((point) => point.map === map.name).length;
              return (
                <button
                  key={map.id}
                  className={selectedMap === map.id ? 'map-item active' : 'map-item'}
                  onClick={() => setSelectedMap(map.id)}
                >
                  <div>
                    <strong>{map.name}</strong>
                    <small>{map.regions.join(' / ')} · {count} 个点位</small>
                  </div>
                  <span>{map.difficulty}</span>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="results-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">当前地图</p>
              <h2>{selectedMap === 'all' ? '全部地图' : activeMap.name}</h2>
            </div>
            <span className="point-count">{filteredPoints.length} 点位</span>
          </div>

          <div className="point-list">
            {filteredPoints.map((point) => (
              <article key={point.id} className={selectedPoint.id === point.id ? 'point-card active' : 'point-card'}>
                <div className="card-head">
                  <span className="tag type-tag">{point.type}</span>
                  <span className="tag map-tag">{point.map}</span>
                </div>
                <h3>{point.name}</h3>
                <p className="area-line">{point.area} · {point.position}</p>
                <p className="description">{point.description}</p>
                <div className="mini-tags">
                  {point.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="detail-panel">
          <div className="detail-header">
            <p className="eyebrow">点位教学</p>
            <h3>{selectedPoint.name}</h3>
          </div>

          <div className="detail-meta">
            <span>{selectedPoint.map}</span>
            <span>{selectedPoint.area}</span>
            <span>{selectedPoint.type}</span>
          </div>

          <div className="throw-box">
            <h4>投掷方式</h4>
            <p>{selectedPoint.throwPattern}</p>
          </div>

          <div className="instruction-box">
            <h4>操作步骤</h4>
            <ol>
              {selectedPoint.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="note-box">
            <h4>使用建议</h4>
            <p>{selectedPoint.description}</p>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;

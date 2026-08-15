import { useState, useEffect, useRef } from "react";

const STATUS = {
  want: { label: "Want to read", color: "#3C6E71" },
  reading: { label: "Reading", color: "#A13D2C" },
  finished: { label: "Finished", color: "#1F2A24" },
};

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function Stamp({ status }) {
  const s = STATUS[status];
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: s.color,
        border: `1.5px solid ${s.color}`,
        borderRadius: 3,
        padding: "2px 6px",
        transform: "rotate(-2deg)",
        opacity: 0.9,
      }}
    >
      {s.label}
    </span>
  );
}

function Stars({ value, onChange, editable }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          onClick={() => editable && onChange(n === value ? 0 : n)}
          style={{
            cursor: editable ? "pointer" : "default",
            color: n <= value ? "#A13D2C" : "#D8D0BC",
            fontSize: 14,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Card({ entry, onSave, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(entry);

  useEffect(() => setDraft(entry), [entry]);

  const commit = () => {
    if (!draft.title.trim()) return;
    onSave(draft);
    setEditing(false);
  };

  return (
    <div
      style={{
        background: "#F2ECDD",
        border: "1px solid #C9BFA0",
        borderRadius: 2,
        padding: "18px 18px 14px",
        position: "relative",
        boxShadow: "2px 3px 0 rgba(20,24,31,0.15)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        minHeight: 190,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -6,
          left: 20,
          right: 20,
          height: 12,
          backgroundImage:
            "radial-gradient(circle, #14181F 2.5px, transparent 2.6px)",
          backgroundSize: "16px 12px",
          backgroundRepeat: "repeat-x",
        }}
      />
      {editing ? (
        <>
          <input
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            placeholder="Title"
            style={inputStyle}
            autoFocus
          />
          <input
            value={draft.author}
            onChange={(e) => setDraft({ ...draft, author: e.target.value })}
            placeholder="Author"
            style={{ ...inputStyle, fontSize: 13 }}
          />
          <select
            value={draft.status}
            onChange={(e) => setDraft({ ...draft, status: e.target.value })}
            style={{ ...inputStyle, fontSize: 12 }}
          >
            {Object.entries(STATUS).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
          {draft.status === "finished" && (
            <Stars
              value={draft.rating || 0}
              editable
              onChange={(r) => setDraft({ ...draft, rating: r })}
            />
          )}
          <textarea
            value={draft.notes}
            onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
            placeholder="Notes"
            rows={2}
            style={{ ...inputStyle, fontSize: 12, resize: "vertical" }}
          />
          <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
            <button onClick={commit} style={btnPrimary}>
              Save entry
            </button>
            <button onClick={() => { setDraft(entry); setEditing(false); }} style={btnGhost}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#1F2A24",
                  lineHeight: 1.2,
                }}
              >
                {entry.title}
              </div>
              {entry.author && (
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12,
                    color: "#5C5645",
                    marginTop: 2,
                  }}
                >
                  {entry.author}
                </div>
              )}
            </div>
            <Stamp status={entry.status} />
          </div>

          {entry.status === "finished" && entry.rating > 0 && (
            <Stars value={entry.rating} editable={false} />
          )}

          {entry.notes && (
            <div
              style={{
                fontSize: 13,
                color: "#3A362B",
                lineHeight: 1.5,
                fontStyle: "italic",
                borderLeft: "2px solid #C9BFA0",
                paddingLeft: 10,
              }}
            >
              {entry.notes}
            </div>
          )}

          <div style={{ display: "flex", gap: 14, marginTop: "auto", paddingTop: 6 }}>
            <button onClick={() => setEditing(true)} style={linkBtn}>
              Edit
            </button>
            <button onClick={() => onDelete(entry.id)} style={{ ...linkBtn, color: "#A13D2C" }}>
              Remove card
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const inputStyle = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 14,
  padding: "6px 8px",
  border: "1px solid #C9BFA0",
  borderRadius: 2,
  background: "#FBF8F0",
  color: "#1F2A24",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

const btnPrimary = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 12,
  padding: "6px 12px",
  background: "#1F2A24",
  color: "#F2ECDD",
  border: "none",
  borderRadius: 2,
  cursor: "pointer",
};

const btnGhost = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 12,
  padding: "6px 12px",
  background: "transparent",
  color: "#5C5645",
  border: "1px solid #C9BFA0",
  borderRadius: 2,
  cursor: "pointer",
};

const linkBtn = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  background: "none",
  border: "none",
  color: "#3C6E71",
  cursor: "pointer",
  padding: 0,
};

export default function Shelf() {
  const [entries, setEntries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState("all");
  const [adding, setAdding] = useState(false);
  const [newDraft, setNewDraft] = useState({ title: "", author: "", status: "want", notes: "", rating: 0 });
  const [error, setError] = useState("");
  const titleRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.list("book:");
        if (res && res.keys && res.keys.length) {
          const items = await Promise.all(
            res.keys.map(async (k) => {
              const r = await window.storage.get(k);
              return r ? JSON.parse(r.value) : null;
            })
          );
          setEntries(items.filter(Boolean).sort((a, b) => b.createdAt - a.createdAt));
        }
      } catch (e) {
        // no stored entries yet
      }
      setLoaded(true);
    })();
  }, []);

  const persist = async (entry) => {
    try {
      await window.storage.set(`book:${entry.id}`, JSON.stringify(entry));
    } catch (e) {
      console.error("Storage error", e);
    }
  };

  const handleCreate = async () => {
    if (!newDraft.title.trim()) {
      setError("Give the book a title before adding it.");
      return;
    }
    const entry = { ...newDraft, id: uid(), createdAt: Date.now() };
    setEntries((prev) => [entry, ...prev]);
    setNewDraft({ title: "", author: "", status: "want", notes: "", rating: 0 });
    setError("");
    setAdding(false);
    await persist(entry);
  };

  const handleSave = async (updated) => {
    setEntries((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
    await persist(updated);
  };

  const handleDelete = async (id) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
    try {
      await window.storage.delete(`book:${id}`);
    } catch (e) {
      console.error("Storage error", e);
    }
  };

  const filtered = entries.filter((e) => filter === "all" || e.status === filter);
  const counts = entries.reduce((acc, e) => {
    acc[e.status] = (acc[e.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div
      style={{
        background: "#14181F",
        minHeight: "100vh",
        padding: "36px 24px",
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 34,
              fontWeight: 700,
              color: "#F2ECDD",
              letterSpacing: "-0.01em",
            }}
          >
            The Shelf
          </div>
          <div style={{ fontSize: 13, color: "#8A8779", marginTop: 4 }}>
            A card catalog for what you're reading — {entries.length} {entries.length === 1 ? "entry" : "entries"} on file
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          {["all", "want", "reading", "finished"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "7px 12px",
                borderRadius: 2,
                border: `1px solid ${filter === f ? "#F2ECDD" : "#3A3F4A"}`,
                background: filter === f ? "#F2ECDD" : "transparent",
                color: filter === f ? "#14181F" : "#8A8779",
                cursor: "pointer",
              }}
            >
              {f === "all" ? `All (${entries.length})` : `${STATUS[f].label} (${counts[f] || 0})`}
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <button
            onClick={() => { setAdding((a) => !a); setError(""); }}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              padding: "7px 14px",
              borderRadius: 2,
              border: "1px solid #A13D2C",
              background: adding ? "transparent" : "#A13D2C",
              color: adding ? "#A13D2C" : "#F2ECDD",
              cursor: "pointer",
            }}
          >
            {adding ? "Close" : "+ New card"}
          </button>
        </div>

        {adding && (
          <div
            style={{
              background: "#F2ECDD",
              border: "1px solid #C9BFA0",
              borderRadius: 2,
              padding: 18,
              marginBottom: 20,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <input
              ref={titleRef}
              value={newDraft.title}
              onChange={(e) => setNewDraft({ ...newDraft, title: e.target.value })}
              placeholder="Title"
              style={inputStyle}
              autoFocus
            />
            <input
              value={newDraft.author}
              onChange={(e) => setNewDraft({ ...newDraft, author: e.target.value })}
              placeholder="Author"
              style={{ ...inputStyle, fontSize: 13 }}
            />
            <select
              value={newDraft.status}
              onChange={(e) => setNewDraft({ ...newDraft, status: e.target.value })}
              style={{ ...inputStyle, fontSize: 12 }}
            >
              {Object.entries(STATUS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>
            <textarea
              value={newDraft.notes}
              onChange={(e) => setNewDraft({ ...newDraft, notes: e.target.value })}
              placeholder="Notes"
              rows={2}
              style={{ ...inputStyle, fontSize: 12, resize: "vertical" }}
            />
            {error && <div style={{ fontSize: 12, color: "#A13D2C" }}>{error}</div>}
            <div>
              <button onClick={handleCreate} style={btnPrimary}>
                File this card
              </button>
            </div>
          </div>
        )}

        {loaded && filtered.length === 0 && (
          <div
            style={{
              color: "#5F5E5A",
              fontSize: 13,
              padding: "40px 0",
              textAlign: "center",
              border: "1px dashed #3A3F4A",
              borderRadius: 2,
            }}
          >
            {entries.length === 0
              ? "No cards filed yet. Add your first book above."
              : "No cards match this filter."}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: 18,
          }}
        >
          {filtered.map((entry) => (
            <Card key={entry.id} entry={entry} onSave={handleSave} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

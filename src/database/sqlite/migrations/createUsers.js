const createUsers = 
`
CREATE TABLE IF NOT EXISTS users (
	Id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR, 
  email VARCHAR,
  password VARCHAR,
  avatar VARCHAR NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`
export default createUsers
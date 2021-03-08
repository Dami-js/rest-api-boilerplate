import initMongodb from './mongodb';
import postgresdb from './postgresdb';

type DBNAME = 'mongo' | 'postgres';

const useDatabase = (name?: DBNAME) => {
  try {
    switch (name) {
      case 'mongo':
        initMongodb();
        break;

      default:
        postgresdb();
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

export default useDatabase;

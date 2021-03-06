import { SingleObject } from "../reducer";

/**
 * given object, return feature
 * @param val 
 */
export function objectToGeojson(
  val: SingleObject
): GeoJSON.Feature<GeoJSON.Geometry, SingleObject > {
  return {
    type: "Feature",
    properties: val,
    geometry: val.geo //mariam bagShap
  };
}

/**
 * given array of objects, return array of feature
 * @param values 
 */
export function getAllObjectsAsFeature(values: Array<SingleObject >): GeoJSON.Feature[] {
  let geojson: GeoJSON.Feature<GeoJSON.Geometry, SingleObject >[] = [];
  for (const val of values) {
    if (val.geo) { //mariam bagShap
      geojson.push(objectToGeojson(val));
    }
  }
  return  geojson
}

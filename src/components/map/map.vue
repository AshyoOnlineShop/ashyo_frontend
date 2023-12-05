<template>
  <div>
    <select v-model="selected" class="select-default">
      <option value="RoadOnDemand">RoadOnDemand</option>
      <option value="AerialWithLabels">AerialWithLabels</option>
      <option value="CanvasDark">CanvasDark</option>
    </select>
    <button class="btn-default" type="button" @click="rotateRight"></button>
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 450px">
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection" />

      <ol-tile-layer ref="osmLayer" title="OSM">
        <ol-source-osm />
      </ol-tile-layer>

      <ol-control-bar>
        <ol-toggle-control
          html="🔘"
          className="edit"
          title="Point"
          :onToggle="(active) => changeDrawType(active, 'Point')" />
        <ol-toggle-control
          html="🔹"
          className="edit"
          title="Polygon"
          :onToggle="(active) => changeDrawType(active, 'Polygon')" />
        <ol-toggle-control
          html="🟢"
          className="edit"
          title="Circle"
          :onToggle="(active) => changeDrawType(active, 'Circle')" />
        <ol-toggle-control
          html="〰️"
          className="edit"
          title="LineString"
          :onToggle="(active) => changeDrawType(active, 'LineString')" />
        <ol-videorecorder-control @stop="videoStopped" />
        <ol-printdialog-control />
      </ol-control-bar>

      <ol-interaction-draw
        :type="drawType"
        @drawend="drawend"
        @drawstart="drawstart">
      </ol-interaction-draw>

      <ol-tile-layer>
        <ol-source-bingmaps
          apiKey="AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI"
          :imagerySet="selected" />
      </ol-tile-layer>

      <ol-vector-layer>
        <ol-source-vector>
          <ol-feature>
            <ol-geom-multi-point
              :coordinates="[[69.2036104, 41.2858243]]"></ol-geom-multi-point>
            <ol-style>
              <ol-style-circle :radius="radius">
                <ol-style-fill :color="fillColor"></ol-style-fill>
                <ol-style-stroke
                  :color="strokeColor"
                  :width="strokeWidth"></ol-style-stroke>
              </ol-style-circle>
            </ol-style>
          </ol-feature>
        </ol-source-vector>
      </ol-vector-layer>
    </ol-map>
  </div>
</template>

<script setup>
import { ref } from "vue";

const center = ref([69.2036104, 41.2858243]);
const projection = ref("EPSG:4326");
const zoom = ref(15);
const radius = ref(10);
const strokeWidth = ref(4);
const strokeColor = ref("crimson");
const fillColor = ref("white");
const selected = ref("RoadOnDemand");
const view = ref(null);
const viewRef = ref(null);
const rotation = ref(Math.PI / 6);

const drawEnable = ref(false);
const drawType = ref("Point");

const changeDrawType = (active, draw) => {
  drawEnable.value = active;
  drawType.value = draw;
};

const drawstart = (event) => {
  console.log(event);
};

const drawend = (event) => {
  console.log(event);
};

const videoStopped = (event) => {
  console.log(event);
};

const osmLayer = ref(null);

function rotateRight() {
  viewRef.value?.adjustRotation(0.1);
}
</script>

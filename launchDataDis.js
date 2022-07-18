//A class to setup the Data.
class InputData{
    constructor(time_seconds,
        latitude, 
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV, 
        accelX,
        accelY, 
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,

        ){// to make the properties real, we will need to add "this" keyword.
            // this..... = ....., 
            this.time_seconds = time_seconds;
            this.latitude = latitude;
            this.gps_altitude = gps_altitude;
            this.bmpSensor_altitude = bmpSensor_altitude;
            this.bmpSensor_pressure = bmpSensor_pressure;
            this.bmpSensor_temp = bmpSensor_temp; 
            this.digSensor_temp = digSensor_temp; 
            this.cssSensor_temp = cssSensor_temp;
            this.cssSensor_eCO2 = cssSensor_eCO2; 
            this.cssSensor_TVOC = cssSensor_TVOC;
            this.UV = UV;
            this.accelX = accelX;
            this.accelY = accelY;
            this.accelZ = accelZ;
            this.magneticX = magneticX;
            this.magneticY = magneticY;
            this.magneticZ = magneticZ; 
            this.gyroX = gyroX;
            this.gyroY = gyroY;
            this.gyroZ = gyroZ;

        }
         

}

//A getData function to load the data from the data file. 
//This data updates every 5 seconds and combined it holds about 8 hours of data. 
//When we create our table, it will need to keep updating every 5 seconds, this way all 
//8 hour data can be viewed. 
//*** The file called, "dataLoader-1.js", which has 8 hours of data, 
// has stored all the data inside a function called, 'loadData'. to use that function
// we need to add it to this new function inside a variable. */
function getData(){
    var loadedData = loadData();
    return loadedData;
}


//A dataRow function to setup the data/to fill in the tablel
//Where did we get these parameters from? We can use html tag inside js function? 
// EAch row of the table has 3 parameters. 
// we are using the previous data table on uatSpace.html file
//dataRow() is a premade function with three parameters of legend, value, units. 
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}



//updateDisplay to tie it all together
// Now, inorder to load our data to our table and its specific rows. 
//we will need the table id, row id, and the data itself from the class constructors. 
//If time is 10 seconds or above, on these specific rows add these constroctors. 
//dataRow(), is the previous function we made. Used inside the if statement. 
function updateDisplay(){

    //record and display time data
    theTime = new Date();
    document.getElementById("clockTime").innerHTML = theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds();
    var timeReed = data[index].time_seconds;
    //update table by filling the first row 
    if (timeReed >= 10){
        //we are adding the time_seconds constructor parameter to the data table the seconds row. 
        document.getElementById("data").rows["seconds"].innerHTML = 
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        //.latitude is added to the latitude row. 
        document.getElementById("data").rows["latitude"].innerHTML = 
            dataRow("Latitude", data[index].latitude, "");
        //.gps_altitude constructor is added to gps_altitude row. 
        document.getElementById("data").rows["gps_altitude"].innerHTML = 
            dataRow("gps_altitude", data[index].gps_altitude, "");
        document.getElementById("data").rows["bmp_altitude"].innerHTML = 
            dataRow("bmp_altitude", data[index].bmpSensor_altitude, "");
        document.getElementById("data").rows["bmp_pressure"].innerHTML = 
            dataRow("bmp_pressure", data[index].bmpSensor_pressure, "");
        document.getElementById("data").rows["bmp_temperature"].innerHTML = 
            dataRow("bmp_temperature", data[index].bmpSensor_temp, "");
        document.getElementById("data").rows["dig_temperature"].innerHTML = 
            dataRow("dig_temperature", data[index].digSensor_temp, "");
        document.getElementById("data").rows["css_temperature"].innerHTML = 
            dataRow("css_temperature", data[index].cssSensor_temp, "");
        document.getElementById("data").rows["css_eC02"].innerHTML = 
            dataRow("css_eC02", data[index].cssSensor_eCO2, "");
        //.cssSensor_TVOC is added to the css_TVOC row.
        document.getElementById("data").rows["css_TVOC"].innerHTML = 
            dataRow("css_TVOC", data[index].cssSensor_TVOC, "");
        document.getElementById("data").rows["UV"].innerHTML = 
            dataRow("UV", data[index].UV, "");
        document.getElementById("data").rows["accelx"].innerHTML = 
            dataRow("accelx", data[index].accelX, "");
        document.getElementById("data").rows["accelY"].innerHTML = 
            dataRow("accelY", data[index].accelY, "");
        document.getElementById("data").rows["accelZ"].innerHTML = 
            dataRow("accelZ", data[index].accelZ, "");
        //.magneticX constructor is added to the magneticS row. 
        document.getElementById("data").rows["magneticX"].innerHTML = 
            dataRow("magneticX", data[index].magneticX, "");
        document.getElementById("data").rows["magneticY"].innerHTML = 
            dataRow("magneticY", data[index].magneticY, "");
        document.getElementById("data").rows["magneticZ"].innerHTML = 
            dataRow("magneticZ", data[index].magneticZ, "");
        document.getElementById("data").rows["gyroX"].innerHTML = 
            dataRow("gyroX", data[index].gyroX, "");
        document.getElementById("data").rows["gyroY"].innerHTML = 
            dataRow("gyroY", data[index].gyroY, "");
        document.getElementById("data").rows["gyroZ"].innerHTML = 
            dataRow("gyroZ", data[index].gyroZ, "");
    }
    //When we run the code without the if statement, it stops at 10 seconds 
    //and doesn't update the time. 
    //the if statement adds 1 to index as long as it is less than 5. 
    //if more than 500 index is zero. 
    if(index < 500){
        index++;
    }else {
        index = 0;
    }
}

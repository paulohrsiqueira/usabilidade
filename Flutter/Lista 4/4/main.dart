import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: VolumeCalculator(),
  ));
}

class VolumeCalculator extends StatefulWidget {
  @override
  _VolumeCalculatorState createState() => _VolumeCalculatorState();
}

class _VolumeCalculatorState extends State<VolumeCalculator> {
  TextEditingController lengthController = TextEditingController();
  TextEditingController widthController = TextEditingController();
  TextEditingController heightController = TextEditingController();
  double volume = 0.0;

  void calculateVolume() {
    double length = double.parse(lengthController.text);
    double width = double.parse(widthController.text);
    double height = double.parse(heightController.text);

    if (length > 0 && width > 0 && height > 0) {
      double vol = length * width * height;
      setState(() {
        volume = vol;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Calculadora de Volume'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextField(
              controller: lengthController,
              decoration: InputDecoration(labelText: 'Comprimento (cm)'),
              keyboardType: TextInputType.number,
            ),
            TextField(
              controller: widthController,
              decoration: InputDecoration(labelText: 'Largura (cm)'),
              keyboardType: TextInputType.number,
            ),
            TextField(
              controller: heightController,
              decoration: InputDecoration(labelText: 'Altura (cm)'),
              keyboardType: TextInputType.number,
            ),
            ElevatedButton(
              onPressed: calculateVolume,
              child: Text('Calcular Volume'),
            ),
            SizedBox(height: 16),
            Text(
              'Volume: ${volume.toStringAsFixed(2)} cm³',
              style: TextStyle(fontSize: 20),
            ),
          ],
        ),
      ),
    );
  }
}
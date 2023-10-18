import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: IMCCalculator(),
  ));
}

class IMCCalculator extends StatefulWidget {
  @override
  _IMCCalculatorState createState() => _IMCCalculatorState();
}

class _IMCCalculatorState extends State<IMCCalculator> {
  TextEditingController weightController = TextEditingController();
  TextEditingController heightController = TextEditingController();
  String classification = '';
  double imc = 0.0;

  void calculateIMC() {
    double weight = double.parse(weightController.text);
    double height = double.parse(heightController.text);

    if (weight > 0 && height > 0) {
      double heightInMeters = height / 100;
      double bmi = weight / (heightInMeters * heightInMeters);
      setState(() {
        imc = bmi;
        classification = getClassification(bmi);
      });
    }
  }

  String getClassification(double bmi) {
    if (bmi < 18.5) {
      return 'Abaixo do Peso';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Peso Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Sobrepeso';
    } else if (bmi >= 30 && bmi < 34.9) {
      return 'Obesidade Grau I';
    } else if (bmi >= 35 && bmi < 39.9) {
      return 'Obesidade Grau II';
    } else {
      return 'Obesidade Grau III';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Calculadora de IMC'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextField(
              controller: weightController,
              decoration: InputDecoration(labelText: 'Peso (kg)'),
              keyboardType: TextInputType.number,
            ),
            TextField(
              controller: heightController,
              decoration: InputDecoration(labelText: 'Altura (cm)'),
              keyboardType: TextInputType.number,
            ),
            ElevatedButton(
              onPressed: calculateIMC,
              child: Text('Calcular IMC'),
            ),
            SizedBox(height: 16),
            Text(
              'IMC: ${imc.toStringAsFixed(2)}',
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(height: 16),
            Text(
              'Classificação: $classification',
              style: TextStyle(fontSize: 20),
            ),
          ],
        ),
      ),
    );
  }
}
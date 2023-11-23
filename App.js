import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IncomeExpenseCalculator = () => {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);
  const [remainingIncome, setRemainingIncome] = useState(0);

  const addExpense = () => {
    if (expense) {
      const expenseAmount = parseFloat(expense);
      setTotalExpense(totalExpense + expenseAmount);
      setExpense('');
    }
  };

  const calculateRemainingIncome = () => {
    if (income) {
      const incomeAmount = parseFloat(income);
      const remaining = incomeAmount - totalExpense;
      setRemainingIncome(remaining);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter income"
        keyboardType="numeric"
        value={income}
        onChangeText={(text) => setIncome(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter expense"
        keyboardType="numeric"
        value={expense}
        onChangeText={(text) => setExpense(text)}
      />
      <Button style={styles.button} title="Add Expense" onPress={addExpense} />
  

      <Button style={styles.button} title="Calculate Remaining Income" onPress={calculateRemainingIncome} />

      <Text style={styles.resultText}>
        Total Expense: ₹{totalExpense.toFixed(2)}
      </Text>

      <Text style={styles.resultText}>
        Remaining Income: ₹{remainingIncome.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    fontSize: 20,
  },
  expenseInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default IncomeExpenseCalculator;

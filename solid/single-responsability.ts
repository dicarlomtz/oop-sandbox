// Single Responsibility Principle
// A class should have one and only one reason to change
// A class should have only one responsibility

interface IService {
  perform(): void;
}

class SendEmailService implements IService {
  perform() {
    console.log('Sending email');
  }
}
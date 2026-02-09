using NUnit.Framework;

namespace ClassLibrary1.Tests;

public class ExampleTests
{
    [Test]
    public void TwoPlusTwo_IsFour()
    {
        Assert.That(2 + 2, Is.EqualTo(4));
    }
}